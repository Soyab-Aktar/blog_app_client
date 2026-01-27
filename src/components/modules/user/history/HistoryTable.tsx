import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BlogPost } from "@/types"

export default function HistoryTable({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border-2 rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 hover:bg-gray-800">
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Featured</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((item: BlogPost) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.content}</TableCell>
              <TableCell>{item.views}</TableCell>
              <TableCell>{item.isFeatured ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}