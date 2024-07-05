"use client";

import { SelectLanguages } from "@/utils/select-languages";
import { sidebarRoutes } from "@/utils/sidebar-routes";
import { NavbarContainer } from "./navbar-container";

export function NavbarClient() {
  return <NavbarContainer languages={SelectLanguages} routes={sidebarRoutes} />;
}
