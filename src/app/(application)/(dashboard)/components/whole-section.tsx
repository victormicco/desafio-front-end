import FirstSection from "./first-section/first-section";
import SecondSection from "./second-section/second-section";

export default function WholeSection() {
  return (
    <section className="max-h-[90vh] p-4 w-full overflow-auto">
      <FirstSection />
      <SecondSection />
    </section>
  );
}
