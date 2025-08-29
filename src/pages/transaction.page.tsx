import { TransactionTable } from "@/components/modules/Transaction/TransactionTable";
import { useAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function Transitions() {
  const { data, isLoading, error } = useAllTransactionsQuery(undefined);
  const transactions = data?.data;

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <p className="text-center text-2xl w-full  ">Loading...</p>
      </div>
    );
  }

  if (transactions?.length === 0) {
    return (
      <div className="w-full flex justify-center items-center">
        <p className="text-center text-2xl w-full  ">No Transactions Found.</p>
      </div>
    );
  }

  console.log(error);
  return (
    <section className="w-full my-5">
      <div className="w-fit  mx-auto">
        <h1 className="text-2xl font-bold text-center mb-5">Transition history</h1>
      <TransactionTable data={transactions} />
      </div>
    </section>
  );
}
