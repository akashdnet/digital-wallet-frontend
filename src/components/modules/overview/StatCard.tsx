type StatCardProps = {
  data: { role: string; total: number };
};

const StatCard = ({ data }: StatCardProps) => {
  const config = roleConfig[data?.role] || {
    title: "Unknown",
    icon: null,
    color: "text-gray-600",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
      {config.icon}
      <div>
        <h2 className="text-gray-500 text-sm font-medium">{config.title}</h2>
        <p className={`text-2xl font-bold ${config.color}`}>{data?.total | 0}</p>
      </div>
    </div>
  );
};

export default StatCard;





import { FaMoneyCheckAlt, FaUsers, FaUserTie } from "react-icons/fa";

const roleConfig: Record<string, { title: string; icon: any; color: string }> = {
  user: {
    title: "Total User",
    icon: <FaUsers className="text-3xl text-blue-600" />,
    color: "text-blue-600",
  },
  agent: {
    title: "Total Agent",
    icon: <FaUserTie className="text-3xl text-green-600" />,
    color: "text-green-600",
  },
  transaction: {
    title: "Total Transaction",
    icon: <FaMoneyCheckAlt className="text-3xl text-purple-600" />,
    color: "text-purple-600",
  },
};
