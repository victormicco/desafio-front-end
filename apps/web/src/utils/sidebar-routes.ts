import { BarChartBig, FilePieChart } from "lucide-react";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface SidebarRoutesType {
	id: number;
	name: string;
	path: string;
	icon: IconComponent;
}

export const sidebarRoutes: SidebarRoutesType[] = [
	{
		id: 1,
		name: "Dashboard",
		path: "/",
		icon: FilePieChart,
	},
	{
		id: 2,
		name: "Leaderboard",
		path: "/leaderboard",
		icon: BarChartBig,
	},
];
