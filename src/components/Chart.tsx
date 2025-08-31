import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js"
import { Line } from "react-chartjs-2"
import { useDashboardOverviewQuery } from "@/redux/features/admin/admin.api"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const MONTHS_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default function Chart() {
  const { data: overviewData, isLoading, error } = useDashboardOverviewQuery(undefined)
  const userStats = overviewData?.data?.userStats

  const labels = MONTHS_ORDER.map(month => month.slice(0, 3)) // ["Jan", "Feb", ...]
  const values = MONTHS_ORDER.map(month => userStats?.[month] || 0) // get value or 0

  const data = {
    labels,
    datasets: [
      {
        label: "User Growth",
        data: values,
        borderColor: "rgb(59, 130, 246)", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
        fill: true,
      }
    ]
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly User Growth" }
    }
  }

  if (isLoading) return <p className="text-center">Loading...</p>
  if (error) return <p className="text-center text-red-500">Failed to load data</p>

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg">
      <CardHeader>
        <CardTitle>Total Number of User Registration Per Month – This Year</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  )
}
