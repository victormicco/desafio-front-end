import FirstSection from "./first-section/first-section";
import SecondSection from "./second-section/second-section";

export default function WholeSection() {
  return (
    <section className="max-h-full p-4 w-full overflow-auto flex-col gap-y-10 flex">
      <FirstSection />
      <SecondSection />
    </section>
  );
}
