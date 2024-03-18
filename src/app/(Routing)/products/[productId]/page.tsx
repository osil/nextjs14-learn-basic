import FetchData from "@/app/_lib/fetch";
type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetail({ params }: Props) {
  const { productId } = params;
  const productData = await FetchData(
    `https://api.vercel.app/products/${productId}`
  );
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
