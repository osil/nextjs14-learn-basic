import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.products.findMany();
  return Response.json(res);
}
