import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log(session);
  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold"><span className="text-red-500">Home</span> Page</h1>
      <p><b>Route : </b>/</p>
    </div>
  );
}
