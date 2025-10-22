import React from "react";

type StatCardProps = {
  icon: React.ElementType;
  title: string;
  value: string | number;
  color: string;
};

const StatCard = ({ icon: Icon, title, value, color }: StatCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
      <Icon className={`text-3xl ${color}`} />
      <div>
        <h2 className="text-gray-500 text-sm font-medium">{title}</h2>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
