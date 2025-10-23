
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: {
    role: "user" | "agent"
    total: number;
    breakdown: {
      active: number;
      pending: number;
      blocked: number;
    };
  }
}

export default function StatusPieChart({ data }: Props) {
  
  const title = data?.role === "user" ? "All User Status Distribution" : "All Agent Status Distribution"
  const { active, pending, blocked } = data?.breakdown;
 




  const chartData = {
    labels: ["Active", "Pending", "Block"],
    datasets: [
      {
        label: "Users",
        data: [active, pending, blocked],
        backgroundColor: [
          "rgba(34,197,94,0.7)",   
          "rgba(234,179,8,0.7)",   
          "rgba(239,68,68,0.7)",   
        ],
        borderColor: [
          "rgba(34,197,94,1)",
          "rgba(234,179,8,1)",
          "rgba(239,68,68,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "All User Status Distribution",
      },
    },
  };

  return (
    <div className="max-w-md mx-auto space-y-7">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
  {title}
</h2>

      <Pie data={chartData} options={options} className=" h-48" />
    </div>
  );
}
