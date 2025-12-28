import type { JSX } from "react";
import type { Role } from "./roleType";

export type protectedRoutes = {
  children: JSX.Element;
  role?: Role;
};
