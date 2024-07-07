"use client";

import { dashboardService } from "@/services/dashboard";
import { ServiceLevelChart } from "./components/level-of-service-card";
import { SalesMap } from "./components/sales-map-card";
import { TopProductCard } from "./components/top-products-card";

export default function ThirdSection() {
  return (
    <section className="xl:h-[33vh] p-4 flex w-full rounded-lg h-[120vh] gap-y-2">
      <div className="w-full flex gap-x-10 flex-col h-full gap-y-4 lg:gap-y-0 xl:flex-row">
        <TopProductCard
          customClass="xl:w-1/2 w-full h-full overflow-auto"
          getProductsData={dashboardService.getTopProducts}
        />
        <SalesMap getMapOfSales={dashboardService.getMapOfSales} />
        <ServiceLevelChart getServiceLevel={dashboardService.getServiceLevel} />
      </div>
    </section>
  );
}
