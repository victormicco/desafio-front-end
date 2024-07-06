import { ServiceLevelChart } from "./components/level-of-service-card";
import { SalesMap } from "./components/sales-map-card";
import { TopProductCard } from "./components/top-products-card";

export default function ThirdSection() {
  return (
    <section className="bg-background xl:h-[33vh]  p-4 flex w-full rounded-lg h-full">
      <div className="w-full flex gap-x-10 flex-col h-full gap-y-4 lg:gap-y-0 xl:flex-row">
        <TopProductCard customClass="xl:w-1/2 w-full  overflow-auto" />
        <SalesMap />
        <ServiceLevelChart />
      </div>
    </section>
  );
}
