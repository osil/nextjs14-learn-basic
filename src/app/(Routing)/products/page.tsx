import axios from "axios";
import Link from "next/link";

async function fetchData() {
  try {
    const response = await axios.get("https://api.vercel.app/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Products() {
  const productsData = await fetchData();
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
