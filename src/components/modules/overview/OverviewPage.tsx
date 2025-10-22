import { invoices } from "@/utils/constant";
import { CardsComponent } from "./CardsComponent";
import StatusPieChart from "./ChartComponent";
import BarChart from "./BarChart";

export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        Overview
      </h1>
      <div className="space-y-28 max-w-5xl mx-auto p-6">
        <CardsComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
        <StatusPieChart data={invoices} title="All Agent Account Status"/>
        <StatusPieChart data={invoices} title="All User Account Status" />
        </div>
        <BarChart data={invoices} />
      </div>
    </div>
  );
}
