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

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(e.target.value, 10)
    if (!isNaN(newLimit) && newLimit > 0) {
      setSearchParams({ page: "1", limit: String(newLimit) }) // নতুন limit দিলে page reset হবে 1 এ
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px] text-left">Date</TableHead>
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
              <TableCell className="text-left text-gray-600">
                {invoice.date}
              </TableCell>

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
              <TableCell className="font-semibold text-right">
                <span className="flex items-center justify-end">
                  <TbCurrencyTaka className="inline" />
                  {invoice.totalAmount}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 gap-4">


  <div className="flex items-center gap-2">
    <label htmlFor="limit" className="text-sm text-gray-600">
      Rows per page:
    </label>
   <select
  id="limit"
  className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={limit}
  onChange={(e) => setSearchParams({ page: "1", limit: e.target.value })}
>
  <option value="3">3</option>
  <option value="5">5</option>
  <option value="10">10</option>
</select>
  </div>









  <div className="flex items-center gap-2">
    <Button
      variant="outline"
      size="sm"
      disabled={page === 1}
      onClick={() => handlePageChange(page - 1)}
    >
      Previous
    </Button>





  <div className="text-sm text-gray-600 text-center">
    Page {page} of {totalPages}
  </div>








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

    </div>
  )
}
