import FirstSection from "./first-section/first-section";
import SecondSection from "./second-section/second-section";
import ThirdSection from "./third-section/third-section";

export default function WholeSection() {
  return (
    <section className="max-h-full p-4 w-full flex-col  flex justify-center items-center gap-y-5">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </section>
  );
}
