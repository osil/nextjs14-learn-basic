import FetchData from "@/app/_lib/fetch";
import Link from "next/link";

export default async function Products() {
  const productsData = await FetchData("https://api.vercel.app/products");
  return (
    <div>
      <h1>
        Products Learn Dynamic Routes And Data Fetching (axios) Default Server
        Components
      </h1>
      <div>
        <ul>
          {productsData.map((product: any, index: number) => (
            <li key={index}>
              <Link href={`/products/${product.id}`}>
                {product.name} <b>price : {product.price}</b>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
