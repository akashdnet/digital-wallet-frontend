import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useSearchParams } from "react-router-dom"
import clsx from "clsx"
import { invoices } from "@/utils/constant"
import { TbCurrencyTaka } from "react-icons/tb";



export default function TableComponent() {
  const [searchParams, setSearchParams] = useSearchParams()

  
  const page = parseInt(searchParams.get("page") || "1", 10)
  const limit = parseInt(searchParams.get("limit") || "3", 10)

  const totalPages = Math.ceil(invoices.length / limit)
  const startIndex = (page - 1) * limit
  const currentRows = invoices.slice(startIndex, startIndex + limit)

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), limit: String(limit) })
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
      <h1 className="text-lg font-semibold">Recent Transition History</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Invoice</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        

        <TableBody>
          {currentRows.map((invoice, idx) => (
            <TableRow
              key={invoice.invoice}
              className={clsx(
                "hover:bg-gray-50 transition-colors",
                idx % 2 === 0 && "bg-gray-50/40"
              )}
            >
              <TableCell className="font-medium text-left">{invoice.invoice}</TableCell>
              <TableCell>
                <span
                  className={clsx(
                    "px-2 py-1 rounded-full text-xs font-semibold text-center",
                    invoice.paymentStatus === "Paid" && "bg-green-100 text-green-700",
                    invoice.paymentStatus === "Pending" && "bg-yellow-100 text-yellow-700",
                    invoice.paymentStatus === "Unpaid" && "bg-red-100 text-red-700"
                  )}
                >
                  {invoice.paymentStatus}
                </span>
              </TableCell>
              <TableCell className="text-gray-700 text-center">{invoice.paymentMethod}</TableCell>
              <TableCell className="font-semibold text-right"><span className="flex items-center justify-end"><TbCurrencyTaka className="inline " />{invoice.totalAmount}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      



      <div className="flex justify-between items-center pt-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </Button>

        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
