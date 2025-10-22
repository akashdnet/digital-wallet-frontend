import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TInvoice } from "@/utils/constant";
import clsx from "clsx";
import { TbCurrencyTaka } from "react-icons/tb";

interface props{
    data: TInvoice[]
}


export default function TableData({data}:props) {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Date</TableHead>
            <TableHead className="text-center">Details</TableHead>
            <TableHead className="text-center hidden md:block">To</TableHead>
            <TableHead className="text-right">Amount Summary</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((invoice, idx) => (
            <TableRow
              key={invoice.invoice}
              className={clsx(
                "transition-colors",
                idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
              )}
            >
              <TableCell className="text-left">
                <span>{invoice.date}</span>
              </TableCell>

              <TableCell className="font-medium text-center">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-gray-800">{invoice?.method}</span>
                  <span className="text-xs text-gray-500">
                    <span className="uppercase">Invoice</span>: {invoice?.invoice}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-center hidden md:block">{invoice.to}</TableCell>

              <TableCell className="text-right">
                <div className="flex flex-col gap-1 items-end">
                  <span className="flex items-center font-semibold text-gray-800 md:hidden">
                    TO: {invoice.to}
                  </span>
                  <span className="flex items-center font-semibold text-gray-800">
                    <TbCurrencyTaka className="mr-1" /> {invoice.totalAmount}
                  </span>
                  <span
                    className={clsx(
                      "px-2 py-0.5 rounded-full text-xs font-semibold",
                      invoice.paymentStatus === "Paid" && "bg-green-100 text-green-700",
                      invoice.paymentStatus === "Pending" && "bg-yellow-100 text-yellow-700",
                      invoice.paymentStatus === "Unpaid" && "bg-red-100 text-red-700"
                    )}
                  >
                    {invoice.paymentStatus}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}

          {data?.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
  )
}
