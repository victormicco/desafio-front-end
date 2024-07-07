import { LogOut, Menu } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "../../ui/alert-dialog";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../../ui/sheet";
import { toast } from "../../ui/use-toast";
import { SidebarLogo } from "../icon/sidebar-logo";
import { BlueCard } from "./blue-card";

interface MobileSidebarProps {
  routes: {
    id: number;
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export function MobileSidebar({ routes }: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <aside className="bg-background flex flex-col justify-between px-5 py-8 h-screen gap-y-3">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <SidebarLogo className="size-11 rounded-lg" />
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
          <SheetFooter className="mt-auto">
            <AlertDialog>
              <AlertDialogTrigger onSelect={(e) => e.preventDefault()} asChild>
                <Button className="w-full" variant="outline">
                  <LogOut
                    width={16}
                    height={16}
                    className="mr-2 text-red-500"
                  />
                  Sair
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-80 rounded-lg">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Você realmente quer desconectar?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-500 hover:bg-red-500/80"
                    onClick={() => {
                      () => (window.location.href = "/");
                    }}
                  >
                    Sair
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SheetFooter>
          <BlueCard />
        </aside>
      </SheetContent>
    </Sheet>
  );
}
