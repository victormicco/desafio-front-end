import { SidebarLogo } from "../icon/sidebar-logo";
import { BlueCard } from "./blue-card";

interface DesktopSidebarProps {
	routes: {
		id: number;
		name: string;
		path: string;
		icon: React.FC<React.SVGProps<SVGSVGElement>>;
	}[];
}

export function DesktopSidebar({ routes }: DesktopSidebarProps) {
	return (
		<aside className="bg-background hidden md:flex flex-col justify-between px-8 py-6">
			<div className="flex flex-col gap-10">
				<div className="flex items-center gap-4">
					<SidebarLogo className=" rounded-lg h-9 w-9" />
					<h1 className="text-2xl text-[#151D48] font-bold">Blue</h1>
				</div>
				<div className="flex flex-col gap-6 text-sm text-white font-semibold">
					{routes.map((item) => (
						<a
							key={item.id}
							className="flex gap-4 px-5 items-center bg-[#2500FF] py-3 rounded-xl"
							href={item.path}
						>
							<item.icon />
							{item.name}
						</a>
					))}
				</div>
			</div>
			<BlueCard />
		</aside>
	);
}
