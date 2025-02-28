import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import db from "@/utils/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");
  const { orderId, cartId } = await req.json();

  const order = await db.order.findUnique({
    where: {
      id: orderId,
    },
  });
  const cart = await db.cart.findUnique({
    where: {
      id: cartId,
    },
    include: {
      cartItems: {
        include: {
          product: true,
        },
      },
    },
  });
  if (!order || !cart) {
    return Response.json(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { orderId, cartId },
      line_items: [],
      mode: "payment",
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });
    return Response.json({ clientSecrete: session.client_secret });
  } catch (error) {
    console.log(error);
    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
