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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface TMonthlyStat {
  month: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
  count: number;
}

interface Props {
  data: TMonthlyStat[];
}

export default function BarChart({ data }: Props) {
  
  const allMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  
  const dataMap = new Map<string, number>();
  data?.forEach(item => {
    dataMap.set(item.month, item.count);
  });

  const labels = allMonths;
  const counts = allMonths?.map(month => dataMap.get(month) || 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Transactions",
        data: counts,
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      y: { 
        beginAtZero: true, 
        ticks: { stepSize: 1 } 
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
        Monthly Transactions of this Year
      </h1>
      <Bar data={chartData} options={options} />
    </div>
  );
}