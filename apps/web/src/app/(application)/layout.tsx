import { NavbarClient } from "@/components/fixed/navbar/navbar-client";
import { SidebarContainer } from "@/components/fixed/sidebar/sidebar-container";
import { sidebarRoutes } from "@/utils/sidebar-routes";

export default function ApplcationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SidebarContainer routes={sidebarRoutes} />
      <div className="flex flex-col w-screen ">
        <NavbarClient />
        {children}
      </div>
    </div>
  );
}
