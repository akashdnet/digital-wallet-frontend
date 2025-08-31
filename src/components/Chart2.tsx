import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { useDashboardOverviewQuery } from "@/redux/features/admin/admin.api"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const MONTHS_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default function Chart2() {
  const { data: overviewData, isLoading, error } = useDashboardOverviewQuery(undefined)
  const transactionStats = overviewData?.data?.transactionStats

  // Default fallback if data not ready yet
  const labels = MONTHS_ORDER.map(month => month.slice(0, 3)) // Jan, Feb, ...
  const values = MONTHS_ORDER.map(month => transactionStats?.[month] || 0)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Transactions",
        data: values,
        backgroundColor: "rgba(34, 197, 94, 0.7)",
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Transactions" }
    }
  }

  if (isLoading) return <p className="text-center">Loading...</p>
  if (error) return <p className="text-center text-red-500">Error loading chart</p>

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg">
      <CardHeader>
        <CardTitle>Total Number of Transactions Per Month – This Year</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  )
}
