import { useMyProfileQuery } from '@/redux/features/user/user.api';
import React from 'react';

function TransactionList() {
  const {data} = useMyProfileQuery(undefined)
  
  const user = data?.data?.userInfo;
  const transactions = data?.data?.transactions || [];

  

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((t:any, _:string) => (
          <li key={_} className="py-3 flex justify-between">
            <span>{new Date(t.createdAt).toLocaleDateString()}</span>
            <span
              className={`font-medium ${
                (user?._id === t.senderId ? "text-red-500" : "text-green-500")
              }`}
            >
              {user?._id === t.senderId ? "-" : ""}
              {`৳${t.charge.amountWithCharge}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
