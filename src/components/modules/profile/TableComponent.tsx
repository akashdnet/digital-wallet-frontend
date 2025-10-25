import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
// import { invoices } from "@/utils/constant";





export default function TableComponent({transactions, role}:{transactions:any, role:any}) {

  const rolePath = role == "admin" ? "/dashboard/all-transitions" : "/dashboard/transitions"
  return (
    <div className="w-full max-w-4xl mx-auto md:p-6 p-3 bg-white shadow-lg rounded-xl">
      <h1 className="text-lg font-semibold">Recent Transition History</h1>
      <Table>
        <TableCaption>
          <Button className="cursor-pointer">
            <Link className="w-full" to={rolePath} >View all</Link>
          </Button>
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Invoice</TableHead>
            <TableHead className="text-center">Method</TableHead>
            <TableHead className="text-center">To</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
           {transactions?.length == 0 && <TableCell className="font-medium text-center py-5 text-gray-500 " colSpan={4}>No transaction found</TableCell>}
          {transactions?.map((invoice:any, idx:any) => (
            <TableRow 
              key={invoice.id} 
              className={clsx("hover:bg-gray-50 transition-colors", idx % 2 === 0 && "bg-gray-50/40")}
            >
              <TableCell className="font-medium text-left">{invoice.id}</TableCell>
              <TableCell className="text-gray-700 text-center">{invoice.method}</TableCell>
              <TableCell className="text-center">{invoice.to}</TableCell>
              <TableCell className="font-semibold text-right"><span className="flex items-center justify-end"><TbCurrencyTaka className="inline " />{invoice.amount}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
         
    </div>
  )
}
