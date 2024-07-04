import CardOfSales from "./components/card-of-sales";
import { CardPlatform } from "./components/platforms-card";

export default function FirstSection() {
	return (
		<section className="bg-background h-full p-4 flex w-full rounded-lg">
			<div className="w-full lg:h-[30vh] flex gap-x-10 flex-col lg:flex-row h-full gap-y-4 lg:gap-y-0">
				<CardOfSales className=" h-full lg:w-8/12" />
				<CardPlatform className="lg:w-4/12" />
			</div>
		</section>
	);
}
