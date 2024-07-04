import CardOfSales from "./components/card-of-sales";

export default function FirstSection() {
  return (
    <section className="bg-background h-full p-4 flex w-full rounded-lg">
      <div className="w-8/12  h-[30vh]">
        <CardOfSales className=" h-full " />
      </div>
    </section>
  );
}
