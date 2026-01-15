

export const dynamic = 'force-dynamic';
export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("SomeThing is Wrong")
  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold"><span className="text-red-500">About</span> Page</h1>
      <p><b>Route : </b>/about</p>
    </div>
  )
}