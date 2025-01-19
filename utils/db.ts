import { PrismaClient } from "@prisma/client/edge"; // Use the edge version for Accelerate
// import { withAccelerate } from "@prisma/extension-accelerate";

// Create a Prisma Client singleton with Accelerate extension
const prismaClientSingleton = () => {
  // return new PrismaClient().$extends(withAccelerate()); // This causes error
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
