import FetchData from "@/app/_lib/fetch";
import Link from "next/link";

export default async function ProductList() {
  const productsData = await FetchData("https://api.vercel.app/products");

  return (
    <>
      <h3>Parallel Routes</h3>
      {productsData.map((product: any, index: number) => (
        <li key={index}>
          <Link href={`/products/${product.id}`}>
            {product.name} <b>price : {product.price}</b>
          </Link>
        </li>
      ))}
    </>
  );
}
