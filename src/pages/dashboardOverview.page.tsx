import Chart from "@/components/Chart";
import Chart2 from "@/components/Chart2";
import ManageAgents from "@/components/modules/dashboard-overview/agents/manage-agents";
import DashboardOverview from "@/components/modules/dashboard-overview/dashboard-overview";
import ManageUsers from "@/components/modules/dashboard-overview/users/manage-users";
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="w-full mb-16 md:px-8">
      <div className="mx-auto flex flex-col gap-8">
        <DashboardOverview />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container ">
        <Chart/>
      <Chart2/>
      </div>


        <h1 className="text-3xl font-bold mt-16 text-center text-primary">
          Profile Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  container  ">
          <ManageUsers />
          <ManageAgents />
        </div>
      </div>
    </div>
  );
}
