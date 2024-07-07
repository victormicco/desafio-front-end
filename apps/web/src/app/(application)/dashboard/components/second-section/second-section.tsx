"use client";

import CardLifeAlt from "./components/lives-chart-card";
import { RealityCard } from "./components/reality-charts-card";
import TotalRevenue from "./components/total-revenue";
import { dashboardService } from "@/services/dashboard";

export default function SecondSection() {
  return (
    <section className="xl:h-[40vh] p-4 flex w-full rounded-lg h-full ">
      <div className="w-full flex gap-x-5 gap-y-4 flex-col  xl:flex-row ">
        <TotalRevenue
          className="w-full xl:w-1/2"
          getTotalRevenueData={dashboardService.getTotalRevenue}
        />
        <CardLifeAlt getLivesChartData={dashboardService.getLivesChartData} />
        <RealityCard
          additionalClass="xl:w-1/3"
          getRealityStats={dashboardService.getRealityStats}
        />
      </div>
    </section>
  );
}
