import CardOfSales from "./components/card-of-sales";
import { CardPlatform } from "./components/platforms-card";

export default function FirstSection() {
  return (
    <section className="bg-background h-full p-4 flex w-full rounded-lg">
      <div className="w-full lg:h-[33vh] flex gap-x-10 flex-col  h-full gap-y-4 lg:gap-y-0 md:flex-col sm:flex-col lg:flex-col xl:flex-row">
        <CardOfSales className=" h-full xl:w-8/12 w-full" />
        <CardPlatform className="xl:w-4/12 w-full" />
      </div>
    </section>
  );
}
