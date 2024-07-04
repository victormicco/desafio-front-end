import { File, GanttChartSquare, Tag, UserPlus } from "lucide-react";

export const dataSales = [
	{
		id: 1,
		title: "Total de vendas",
		icon: GanttChartSquare,
		value: "$45,231.89",
		percentage: "+20.1% do mês passado",
		mainColor: "red-500",
	},
	{
		id: 2,
		title: "Total de contratos",
		icon: File,
		value: "350",
		percentage: "+180.1% do mês passado",
		mainColor: "orange-500",
	},
	{
		id: 3,
		title: "Implantadas",
		icon: Tag,
		value: "5",
		percentage: "+19% do mês passado",
		mainColor: "green-500",
	},
	{
		id: 4,
		title: "Novos contratos",
		icon: UserPlus,
		value: "8",
		percentage: "+201 desde a última hora",
		mainColor: "violet-500",
	},
];
