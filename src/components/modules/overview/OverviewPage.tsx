
import { CardsComponent } from "./CardsComponent";
import StatusPieChart from "./ChartComponent";
import BarChart from "./BarChart";
import { useDashboardOverviewQuery } from "@/redux/features/admin/admin.api";
import LoadingPage from "../LoadingPage";

export default function OverviewPage() {

  const { data, isError, error, isLoading} = useDashboardOverviewQuery(undefined)
  const new_data = data?.data
  // console.log(`data : `,new_data)
  // console.log(error)


  if(isLoading){
    return <LoadingPage/>
  }

  const pichartData = new_data?.stats
  const barChartData = new_data?.monthlyStats
 





  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3"> Overview </h1>

      {isError && <h1>{(error as any)?.data?.message || "Something went wrong"}</h1> }

      <div className="space-y-28 max-w-5xl mx-auto p-6">
        <CardsComponent data={new_data} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {
          pichartData?.map((d:any)=>(
            <StatusPieChart data={d} key={d.role} />
          ))
        }
          
      </div>

        <BarChart data={barChartData} />
      
      </div>
    </div>
  );
}
