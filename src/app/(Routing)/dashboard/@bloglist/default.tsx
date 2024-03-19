"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FetchData from "@/app/_lib/fetch";

export default function DefaultBlogList() {
  const [blogs, setBlogs] = useState([]);

  const initialBlogs = async () => {
    const result = await FetchData("https://api.vercel.app/blog");
    setBlogs(result);
  };

  useEffect(() => {
    initialBlogs();
  }, []);

  return (
    <>
      <h3>Parallel Routes Blogs List Default.tsx</h3>
      {blogs.map((blog: any, index: number) => (
        <li key={index}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </>
  );
}
