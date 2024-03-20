import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const res = await prisma.products.findMany();
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}
