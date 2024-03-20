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

export async function POST(req: Request) {
  try {
    const {
      productCode,
      productName,
      productLine,
      productScale,
      productVendor,
      productDescription,
      quantityInStock,
      buyPrice,
      MSRP,
    } = await req.json();
    const newProduct = await prisma.products.create({
      data: {
        productCode,
        productName,
        productLine,
        productScale,
        productVendor,
        productDescription,
        quantityInStock,
        buyPrice,
        MSRP,
      },
    });
    return Response.json(newProduct);
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    });
  }
}
