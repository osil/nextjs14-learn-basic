import axios from "axios";

async function fetchData(id: string) {
  try {
    const response = await axios.get(`https://api.vercel.app/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const productData = await fetchData(productId);
  return (
    <div>
      <h1>Product Details ID : {productId}</h1>
      <h2>Name : {productData.name}</h2>
      <h2>Price : {productData.price}</h2>
      <p>Detail : {productData.description}</p>

      <p>
        Products Learn Dynamic Routes And Data Fetching (axios) Default Server
        Components
      </p>
    </div>
  );
}
