import { useDashboardOverviewQuery } from '@/redux/features/admin/admin.api'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


interface TDashboardStats  {
  totalAgentCount: number;
  totalTransactionCount: number;
  totalUserCount: number;
};


export default function DashboardOverview() {
  const {data, isLoading, error} = useDashboardOverviewQuery(undefined)
  console.log(`dashboard overview      :`, data)
 
  return (
    <div className="p-6 bg-muted">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary"> Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-muted-foreground">{data?.data?.totalUserCount}</p>
            </CardContent>
          </Card>




          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Total Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-muted-foreground">{data?.data?.totalAgentCount}</p>
            </CardContent>
          </Card>



          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-muted-foreground">{data?.data?.totalTransactionCount}</p>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
