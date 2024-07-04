import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { File, GanttChartSquare, Tag, Upload, UserPlus } from "lucide-react";
import { dataSales } from "../mock/data-sales";

type CardOfSalesProps = {
	className?: string;
};

export default function CardOfSales({ className }: CardOfSalesProps) {
	return (
		<Card className={className}>
			<CardHeader className="flex">
				<div className="flex w-full justify-between">
					<div className="flex flex-col">
						<CardTitle>Vendas Hoje</CardTitle>
						<CardDescription>Resumo das vendas</CardDescription>
					</div>
					<Button variant="outline" className="flex gap-x-2">
						<Upload className="h-4 w-4" />
						Exportar
					</Button>
				</div>
			</CardHeader>
			<CardContent className="flex gap-x-14 w-full overflow-auto">
				{dataSales.map((itemCard) => {
					const Icon = itemCard.icon;
					return (
						<div
							key={itemCard.id}
							className={`flex  p-4 border rounded-md  flex-col justify-start bg-opacity-20 bg-${itemCard.mainColor}  gap-y-2 items-start`}
						>
							<Icon
								className={`h-10 w-10 bg-${itemCard.mainColor} p-2 rounded-full text-background`}
							/>
							<div>
								<h2 className="text-xl font-semibold">{itemCard.value}</h2>
								<h3 className="text-sm text-gray-500">{itemCard.title}</h3>
								<p className="text-sm text-blue-500">{itemCard.percentage}</p>
							</div>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}
