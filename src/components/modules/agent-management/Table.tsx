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
import { useState } from "react";

interface Props {
  data: TInvoice[];
}

export default function TableData({ data }: Props) {
  const [rows, setRows] = useState<TInvoice[]>(data);

  const handleApprove = (invoiceId: string, status: "active" | "block" | "pending") => {
    setRows((prev) =>
      prev.map((item) =>
        item.invoice === invoiceId ? { ...item, status } : item
      )
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Status</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center hidden md:block">Email</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((invoice, idx) => (
          <TableRow
            key={invoice.invoice}
            className={clsx(
              "transition-colors",
              idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
            )}
          >
            <TableCell className="text-left">
              <span
                className={clsx(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  invoice.status === "active" &&
                    "bg-green-100 text-green-700",
                  invoice.status === "pending" &&
                    "bg-yellow-100 text-yellow-700",
                  invoice.status === "block" &&
                    "bg-red-100 text-red-700"
                )}
              >
                <span className="uppercase">{invoice.status}</span>
              </span>
            </TableCell>

            <TableCell className="font-medium text-center">
              {invoice.name}
            </TableCell>

            <TableCell className="text-center hidden md:block">
              {invoice.email}
            </TableCell>

            <TableCell className="text-right">
              {invoice.status == "active" ? (
                <button
                  onClick={() => handleApprove(invoice.invoice, "block")}
                  className="px-3 py-1 rounded-md bg-green-500 text-white text-sm hover:bg-green-600"
                >
                  Set Active
                </button>
              ):
              (
                <button
                  onClick={() => handleApprove(invoice.invoice, "active")}
                  className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  Set Block
                </button>
              )
              
              }
            </TableCell>
          </TableRow>
        ))}

        {rows.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-center py-6 text-gray-500"
            >
              No pending request found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
