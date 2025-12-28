import type { JSX } from "react";
import type { Role } from "./roleType";

export type MenuItem = {
  key: string;
  path: string;
  label: string;
  icon: JSX.Element;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type SidebarProps = {
  role: Role;
};
