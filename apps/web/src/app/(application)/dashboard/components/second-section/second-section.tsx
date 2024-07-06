import CardLifeAlt from "./components/lives-chart-card";
import {
  AlternativeRealityCard,
  RealityCard,
} from "./components/reality-charts-card";
import TotalRevenue from "./components/total-revenue";

export default function SecondSection() {
  return (
    <section className="bg-background xl:h-[33vh]  p-4 flex w-full rounded-lg">
      <div className="w-full flex gap-x-10 flex-col h-full gap-y-4 lg:gap-y-0 xl:flex-row">
        <TotalRevenue className="w-full xl:w-1/2" />
        <CardLifeAlt />
        <RealityCard />
      </div>
    </section>
  );
}
