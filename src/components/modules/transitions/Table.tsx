import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { TbCurrencyTaka } from "react-icons/tb";

export type TMethod =
  | "top-up"
  | "add-money"
  | "send-money"
  | "cash-in"
  | "cash-out";
export type TTransactionStatus = "completed" | "failed";
export interface TTransaction {
  date: Date;
  id: string;
  method: TMethod;
  from: string;
  formUserID: string;
  to: string;
  toUserID: string;
  status: TTransactionStatus;
  amount: number;
}

interface props {
  data: TTransaction[];
  isLoading?: boolean;
}

export default function TableData({ data }: props) {
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
            key={invoice.id}
            className={clsx(
              "transition-colors",
              idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
            )}
          >
            <TableCell className="text-left">
              <span>
                {invoice?.date
                  ? new Date(invoice.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </TableCell>

            <TableCell className="font-medium text-center">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-800">
                  {invoice?.method}
                </span>
                <span className="text-xs text-gray-500">
                  <span className="uppercase">Invoice</span>: {invoice?.id}
                </span>
              </div>
            </TableCell>

            <TableCell className="text-center hidden md:block">
              {invoice.to}
            </TableCell>

            <TableCell className="text-right">
              <div className="flex flex-col gap-1 items-end">
                <span className="flex items-center font-semibold text-gray-800 md:hidden">
                  TO: {invoice.to}
                </span>
                <span className="flex items-center font-semibold text-gray-800">
                  <TbCurrencyTaka className=" inline" />{invoice.amount}
                </span>
                <span
                  className={clsx(
                    "px-2 py-0.5 rounded-full text-xs font-semibold uppercase",
                    invoice.status === "completed" &&
                      "bg-green-100 text-green-700",
                    invoice.status === "failed" &&
                      "bg-yellow-100 text-yellow-700"
                  )}
                >
                  {invoice.status}
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
  );
}
