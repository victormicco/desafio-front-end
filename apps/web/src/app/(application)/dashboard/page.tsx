import type { Metadata } from "next";
import WholeSection from "./components/whole-section";

export const metadata: Metadata = {
  title: "Blue company | Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="min-h-[90vh] p-4 xl:w-[85vw]">
      <WholeSection />
    </main>
  );
}
