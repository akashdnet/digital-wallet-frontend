import { useEffect, useState } from "react";
import StatCard from "./StatCard";

export const CardsComponent = ({ data }: { data: any }) => {


  const [cardData, setCardData] = useState([{role:"user", total:0, breakdown:{}},{role:"agent", total:0, breakdown:{}}, {role:"transaction", total:0}])

  
// console.log(first)
useEffect(() => {
  if (data?.stats) {
    setCardData([
      ...data.stats,
      { role: "transaction", total: data.totalTransactions }
    ]);
  }
}, [data]);





   

  


  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {cardData?.map((c, i) => (
          <StatCard key={i} data={c} />
        ))}
      </div>
    </section>
  );
};
