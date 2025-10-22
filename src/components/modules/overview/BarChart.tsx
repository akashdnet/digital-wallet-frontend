
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { TInvoice } from "@/utils/constant";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  data: TInvoice[];
}

export default function BarChart({ data }: Props) {
  
  const monthCounts: Record<string, number> = {};
  data.forEach((invoice) => {
    const month = new Date(invoice.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });

  const labels = Object.keys(monthCounts);
  const counts = Object.values(monthCounts);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Transactions",
        data: counts,
        backgroundColor: "rgba(59, 130, 246, 0.7)", 
        borderRadius: 8, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    //   title: { display: true, text: "Monthly Transactions of this Year" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return <div>
    <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Monthly Transactions of this Year</h1>
    <Bar data={chartData} options={options} />
  </div>;
}
