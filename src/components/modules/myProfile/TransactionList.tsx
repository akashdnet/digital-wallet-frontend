import { Button } from '@/components/ui/button';
import { useMyProfileQuery } from '@/redux/features/user/user.api';
import React from 'react';
import { Link } from 'react-router';

function TransactionList() {
  const {data} = useMyProfileQuery(undefined)
  
  const user = data?.data?.userInfo;
  const transactions = data?.data?.transactions.slice(0, 5) || [];

  

  return (
    <div className=" shadow rounded-lg p-6">
      <div className='flex justify-between  items-baseline mb-4'>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <Button variant="outline" className="text-sm">
          <Link to="/transaction">
            View All
          </Link>
        </Button>
      </div>
      <ul className="divide-y divide-gray-200">
        {transactions.map((t:any, _:string) => (
          <li key={_} className="py-3 flex justify-between">
            <span>{new Date(t?.createdAt).toLocaleDateString()}</span>
            <span
              className={`font-medium ${
                (user?._id === t?.senderId ? "text-red-500" : "text-green-500")
              }`}
            >
              {user?._id === t?.senderId ? "-" : ""}
              {`৳${t?.charge?.amountWithCharge}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
