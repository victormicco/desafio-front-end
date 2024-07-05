import CardLifeAlt from "./components/lives-chart-card";
import {
  AlternativeRealityCard,
  RealityCard,
} from "./components/reality-charts-card";
import TotalRevenue from "./components/total-revenue";

export default function SecondSection() {
  return (
    <section className="bg-background h-full p-4 flex w-full rounded-lg">
      <div className="w-full lg:h-[33vh] flex gap-x-10 flex-col  h-full gap-y-4 lg:gap-y-0 md:flex-col sm:flex-col lg:flex-col xl:flex-row">
        <TotalRevenue className="w-full lg:w-1/2" />
        <CardLifeAlt />
        <RealityCard />
      </div>
    </section>
  );
}
