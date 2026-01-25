"use client"

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';
export default function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("SomeThing is Wrong")
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    (async () => {
      const { data } = await getBlogs();
      setData(data);
    })();
  }, [])

  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold"><span className="text-red-500">About</span> Page</h1>
      <p><b>Route : </b>/about</p>
    </div>
  )
}