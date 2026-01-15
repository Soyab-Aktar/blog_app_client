export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 w-4/5 border-sky-500 m-4">
      <p className="text-xl font-semibold p-5"><span className="text-sky-500">Contact</span> Layout</p>
      {children}
    </div>
  )
}