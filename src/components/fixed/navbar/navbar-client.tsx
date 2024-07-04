"use client";

import { SelectLanguages } from "@/utils/select-languages";
import { sidebarRoutes } from "@/utils/sidebar-routes";
import { usePathname } from "next/navigation";
import { NavbarContainer } from "./navbar-container";

export function NavbarClient() {
  const currentRoute = usePathname();

  const test =
    currentRoute === "/" ? "Dashboard" : "login" ? "login" : "Leaderboard";

  return (
    <NavbarContainer
      currentRoute={test}
      languages={SelectLanguages}
      routes={sidebarRoutes}
    />
  );
}
