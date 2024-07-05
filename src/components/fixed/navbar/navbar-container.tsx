import { MobileSidebar } from "../sidebar/mobile-sidebar";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

interface NavbarProps {
  languages: {
    id: number;
    name: string;
    value: string;
  }[];
  routes: {
    id: number;
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export function NavbarContainer({ languages, routes }: NavbarProps) {
  return (
    <nav className="bg-white flex justify-between gap-6 xl:gap-8 w-full py-3 px-2 xs:px-4 md:px-10 items-center">
      <div className="md:hidden">
        <MobileSidebar routes={routes} />
      </div>

      <DesktopNavbar languages={languages} />
      <MobileNavbar languages={languages} />
    </nav>
  );
}
