import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "Dashboard",
};

// const Hero = dynamic(
//   () => import("./components/hero").then((mod) => mod.Hero),
//   {
//     ssr: false,
//   }
// );

export default function DashboardPage() {
	return <main className="min-h-[90vh] p-4"></main>;
}
