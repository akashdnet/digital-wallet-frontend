"use client";

import React from "react";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import TransactionTable from "./TransactionTable";

export default function TransactionData() {
  const { data } = useMyProfileQuery(undefined);
  const user = data?.data?.userInfo;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [tableData, setTableData] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (data?.data?.transactions) {
      setTableData(data?.data?.transactions);
    }
  }, [data]);

  React.useEffect(() => {
    if (sorting.length > 0) {
      const { id, desc } = sorting[0];
      setTableData((prev) =>
        [...prev].sort((a, b) => {
          const aValue = id.includes(".")
            ? id.split(".").reduce((o, key) => o?.[key], a)
            : a[id];
          const bValue = id.includes(".")
            ? id.split(".").reduce((o, key) => o?.[key], b)
            : b[id];

          if (aValue < bValue) return desc ? 1 : -1;
          if (aValue > bValue) return desc ? -1 : 1;
          return 0;
        })
      );
    }
  }, [sorting]);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "createdAt",
      header: "Date / ID",
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span>{new Date(row.original?.createdAt).toLocaleDateString()}</span>
          <span className="text-gray-400 text-xs break-words whitespace-normal">
            {row.original?.transactionId}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "sentBy",
      header: "To",
       cell: ({ row }) => (
        <div className="flex flex-col">
          <span>{row.original?.sentBy}</span>
          <span className="text-gray-400 text-xs">
            {row.original?.type}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "charge.amountWithCharge",
      header: "Amount",
      cell: ({ row }) => {
        const isSender = user?._id === row.original?.senderId;
        return (
          <span
            className={`font-medium ${
              isSender ? "text-red-500" : "text-green-500"
            }`}
          >
            {isSender ? "-" : ""}
            ৳{row.original?.charge?.amountWithCharge}
          </span>
        );
      },
    },
  ];

  return (
    <TransactionTable
      data={tableData}
      columns={columns}
      sorting={sorting}
      onSortingChange={setSorting}
    />
  );
}
