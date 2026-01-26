import { CreateBlogFormClient } from "@/components/modules/user/create-blog/CreateBlogFromClient";
import CreateBlogFormServer from "@/components/modules/user/create-blog/CreateBlogFromServer";


export default async function CreateBlogPage() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CreateBlogFormClient />
      {/* <CreateBlogFormServer /> */}
    </div>
  );
}