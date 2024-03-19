"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FetchData from "@/app/_lib/fetch";

export default function DefaultActiveProductList() {
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
      <h3>Parallel Routes Product List</h3>
      <Link href="/dashboard"> default</Link>
      {products.map((product: any, index: number) => (
        <li key={index}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </>
  );
}
