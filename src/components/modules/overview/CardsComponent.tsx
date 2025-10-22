import { FaUsers, FaUserTie, FaMoneyCheckAlt } from "react-icons/fa";
import StatCard from "./StatCard";

const data = [
  {
    icon: FaUsers,
    title: "Total User",
    value: "1,245",
    color: "text-blue-600",
  },
  {
    icon: FaUserTie,
    title: "Total Agent",
    value: "320",
    color: "text-green-600",
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Total Transaction",
    value: "8,540",
    color: "text-purple-600",
  },
];

export const CardsComponent = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {data.map((item, index) => (
          <StatCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default StatCard;
