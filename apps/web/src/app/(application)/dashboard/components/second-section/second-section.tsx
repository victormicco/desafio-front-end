import CardLifeAlt from "./components/lives-chart-card";
import {
  AlternativeRealityCard,
  RealityCard,
} from "./components/reality-charts-card";
import TotalRevenue from "./components/total-revenue";

export default function SecondSection() {
  return (
    <section className="xl:h-[40vh] p-4 flex w-full rounded-lg h-[110vh] ">
      <div className="w-full flex gap-x-5 gap-y-4 flex-col  xl:flex-row ">
        <TotalRevenue className="w-full xl:w-1/2 " />
        <CardLifeAlt />
        <RealityCard />
      </div>
    </section>
  );
}
