"use client";
import { dashboardService } from "@/services/dashboard";
import CardOfSales from "./components/card-of-sales";
import { CardPlatform } from "./components/platforms-card";

export default function FirstSection() {
  return (
    <section className=" xl:h-[33vh]  p-4 flex w-full rounded-lg">
      <div className="w-full flex gap-x-10 flex-col h-full gap-y-4 lg:gap-y-0 xl:flex-row">
        <CardOfSales
          className=" xl:w-8/12 w-full flex flex-col gap-y-0"
          getDataSalesInversion={dashboardService.getDataSales}
        />
        <CardPlatform
          className="xl:w-4/12 "
          getDataPlatformInversion={dashboardService.getDataPlatform}
        />
      </div>
    </section>
  );
}
