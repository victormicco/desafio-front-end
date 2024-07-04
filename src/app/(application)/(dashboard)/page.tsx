import type { Metadata } from "next";
import dynamic from "next/dynamic";
import WholeSection from "./components/whole-section";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function DashboardPage() {
	return (
		<main className="min-h-[90vh] p-4">
			<WholeSection />
		</main>
	);
}
