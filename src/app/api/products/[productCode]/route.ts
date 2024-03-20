import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { productCode: string } }
) {
  try {
    const res = await prisma.products.findUnique({
      where: { productCode: params.productCode },
    });
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}
