import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userService } from "@/services/user.service";
import { cookies } from "next/headers";

export default async function Home() {
  const { data, error } = await userService.getSession();
  console.log(data);
  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold"><span className="text-red-500">Home</span> Page</h1>
      <p><b>Route : </b>/</p>
    </div>
  );
}
