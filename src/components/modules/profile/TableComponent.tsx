import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { TbCurrencyTaka } from "react-icons/tb";
import { invoices } from "@/utils/constant";





export default function TableComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-lg font-semibold">Recent Transition History</h1>
      <Table>
        <TableCaption>
          <Button className="cursor-pointer">
            <Link className="w-full" to="/dashboard/transitions">View all</Link>
          </Button>
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice, idx) => (
            <TableRow 
              key={invoice.invoice} 
              className={clsx("hover:bg-gray-50 transition-colors", idx % 2 === 0 && "bg-gray-50/40")}
            >
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <span
                  className={clsx(
                    "px-2 py-1 rounded-full text-xs font-semibold",
                    invoice.paymentStatus === "Paid" && "bg-green-100 text-green-700",
                    invoice.paymentStatus === "Pending" && "bg-yellow-100 text-yellow-700",
                    invoice.paymentStatus === "Unpaid" && "bg-red-100 text-red-700"
                  )}
                >
                  {invoice.paymentStatus}
                </span>
              </TableCell>
              <TableCell className="text-gray-700">{invoice.paymentMethod}</TableCell>
              <TableCell className="font-semibold text-right"><span className="flex items-center justify-end"><TbCurrencyTaka className="inline " />{invoice.totalAmount}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
