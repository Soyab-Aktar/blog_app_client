import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {


  const { data } = await blogService.getBlogPosts({
    isFeatured: true,
    search: "",
  }, {
    cache: "no-store"
  });

  console.log(data);
  return (
    <div className="p-5 grid grid-cols-4 gap-3">

      {data?.data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}

    </div>
  );
}
