"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FetchData from "@/app/_lib/fetch";

export default function DefaultProductList() {
  const [products, setProducts] = useState([]);

  const initialBlogs = async () => {
    const result = await FetchData("https://api.vercel.app/products");
    setProducts(result);
  };

  useEffect(() => {
    initialBlogs();
  }, []);

  return (
    <>
      <h3>Parallel Routes Product List Default.tsx</h3>
      <Link href="/dashboard/active"> active </Link>
      {products.map((product: any, index: number) => (
        <li key={index}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </>
  );
}
