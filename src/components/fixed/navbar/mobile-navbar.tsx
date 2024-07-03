import {
	EnvelopeClosedIcon,
	FaceIcon,
	GearIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import {
	Bell,
	Calculator,
	Calendar,
	CalendarIcon,
	CircleUserRound,
	CreditCard,
	Languages,
	LogOut,
	Mails,
	RocketIcon,
	Search,
	Settings,
	Smile,
	User,
	UsersRound,
} from "lucide-react";
import Image from "next/image";
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
import { Button } from "../../ui/button";
import {
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

import { useToast } from "../../ui/use-toast";

interface MobileNavbarProps {
	languages: {
		id: number;
		name: string;
		value: string;
	}[];
}

export function MobileNavbar({ languages }: MobileNavbarProps) {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();

	return (
		<div className="flex gap-3 sm:gap-8 lg:hidden">
			<Button
				onClick={() => setOpen((open) => !open)}
				size="icon"
				variant="ghost"
			>
				<Search className="size-5 xs:size-6 text-purple-500" />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Procure por algo" />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<Calendar className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>

						<CommandItem>
							<Calculator className="mr-2 h-4 w-4" />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="ghost">
						<Languages className="size-5 xs:size-6" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{languages.map((item) => (
						<DropdownMenuItem key={item.id}>
							<div className="flex gap-2 items-center text-gray-700 font-semibold">
								<span>{item.name}</span>
							</div>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="flex justify-center items-center">
				<User className="size-5 xs:size-6" width={64} height={64} />
			</div>
		</div>
	);
}
