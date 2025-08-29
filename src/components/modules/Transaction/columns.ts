import { TTransaction } from "@/redux/features/transaction/transaction.type";
import { ColumnDef } from "@tanstack/react-table";





export const columns: ColumnDef<TTransaction>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    
  },
  
  {
    accessorKey: "receiverId",
    header: "Receiver",
    cell: ({ row }) => {
      console.log(row.original)
      return row.original.receiverId?.phone ? row.original.receiverId?.phone :  row.original.receiverId?.email ? row.original.receiverId?.email : "—"
    },
  },
  
  {
    accessorKey: "fee",
    header: "Fee",
    cell: ({ row }) => {
      const fee = row.original.fee;
      
      return fee ? `${fee.fee} (${fee.percentage}% + ${fee.charge})` : "—";
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "mobileNumber",
    header: "Mobile",
  },
];
