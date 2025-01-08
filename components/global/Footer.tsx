import Logo from "../header/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="p-10 bg-stone-950 mt-14 text-stone-50 flex flex-col justify-between">
      <div className="hidden lg:grid grid-cols-4 py-6 capitalize">
        <div className="self-start">
          <Logo type="dark" />
        </div>
        <div>
          <ul className="flex-col gap-2 flex px-4">
            <li className="font-semibold mb-6">Online store guide</li>
            <li>customer service after purchase</li>
            <li>Product support</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 px-4">
            <li className="font-semibold mb-6">Get in touch</li>
            <li>Store Locator</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 px-4">
            <li className="font-semibold mb-6">Corporate</li>
            <li>Corporrate</li>
            <li>Information</li>
            <li>Sustainablity</li>
          </ul>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full lg:hidden">
        <AccordionItem value="item-1" className="border-stone-500">
          <AccordionTrigger className="text-lg">
            Online store guide
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex-col gap-2 flex px-4">
              <li>customer service after purchase</li>
              <li>Product support</li>
            </ul>{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-stone-500">
          <AccordionTrigger className="text-lg">Get in touch</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-2 px-4">
              <li>Store Locator</li>
              <li>Contact us</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-stone-500">
          <AccordionTrigger className="text-lg">Corporrate</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-2 px-4">
              <li>Corporrate</li>
              <li>Information</li>
              <li>Sustainablity</li>
            </ul>{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex-col md:border-t md:border-stone-500 pt-4 md:flex-row flex md:justify-between items-center gap-4 mt-10 md:mt-40">
        <div className=" pt-4 md:pr-8 md:pt-0 flex gap-4 items-center md:self-start justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-8 h-8 text-stone-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-8 h-8 text-stone-300" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="w-8 h-8 text-stone-300" />
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaReddit className="w-8 h-8 text-stone-300" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaXTwitter className="w-8 h-8 text-stone-300" />
          </a>
        </div>
        <p className="md:max-w-[450px] text-sm text-stone-300">
          <span>&copy; 2025 M. Saeed Mafipour. All Rights Reserved.</span>
          <span className="block mt-2">
            Designed with passion by M. Saeed Mafipour.
          </span>
          <span className="block mt-2">
            For inquiries or collaborations, feel free to reach out to
          </span>
          <a
            href="mailto:saeed.mafipour@gmail.com"
            className="underline text-stone-400 hover:text-stone-300 flex items-center gap-2 mt-2"
          >
            <MdEmail className="w-4 h-4 text-stone-400" />
            saeed.mafipour@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
