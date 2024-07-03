import {
	EnvelopeClosedIcon,
	FaceIcon,
	GearIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import {
	Bell,
	CalendarIcon,
	ChevronDown,
	LogOut,
	RocketIcon,
	User,
} from "lucide-react";

import { useState } from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../../ui/alert-dialog";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "../../ui/command";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Input } from "../../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";
import { useToast } from "../../ui/use-toast";

interface DesktopNavbarProps {
	languages: {
		id: number;
		name: string;
		value: string;
	}[];
}

export function DesktopNavbar({ languages }: DesktopNavbarProps) {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();
	function CustomSelectPlaceholder() {
		return (
			<div className="flex gap-2 items-center text-gray-700 font-semibold">
				<span>PT (BR)</span>
			</div>
		);
	}

	return (
		<div className="lg:flex flex-1 gap-6 xl:gap-8 items-center hidden">
			<div className="w-[100%]">
				<Input
					onClick={() => setOpen((open) => !open)}
					className=""
					placeholder="Pesquisar informações"
				/>
			</div>

			<Select>
				<SelectTrigger
					title="Seletor de idioma"
					className="border-0 w-[180px] h-full"
				>
					<SelectValue placeholder={<CustomSelectPlaceholder />} />
				</SelectTrigger>
				<SelectContent>
					{languages.map((item) => (
						<SelectItem key={item.id} value={item.value}>
							<div className="flex gap-2 items-center text-gray-700 font-semibold">
								<span>{item.name}</span>
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex gap-2 xl:gap-3 hover:bg-black/10 cursor-pointer duration-500 rounded-xl items-center">
						<div className=" rounded-full bg-muted-foreground">
							<User
								className="rounded-lg p-2 text-white"
								width={32}
								height={32}
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex gap-1 items-center">
								<h3 className="text-[#151D48] text-sm xl:text-base font-bold text-nowrap">
									Jhonny Silva
								</h3>
								<ChevronDown className="size-4 xl:size-6" />
							</div>
							<span className="text-xs xl:text-sm font-light text-gray-400">
								Sales Manager
							</span>
						</div>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<AlertDialog>
						<AlertDialogTrigger onSelect={(e) => e.preventDefault()} asChild>
							<DropdownMenuItem>
								<LogOut color="red" size={16} className="mr-2" />
								Sair
							</DropdownMenuItem>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Você tem certeza</AlertDialogTitle>
								<AlertDialogDescription>
									lorem ipsum dolor sit amet consectetur adipisicing elit sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancelar</AlertDialogCancel>
								<AlertDialogAction
									aria-label="Sair da conta"
									className="bg-red-500 hover:bg-red-500/80"
									onClick={() =>
										toast({
											title: "Desconectado com sucesso!",
										})
									}
								>
									Sair
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
