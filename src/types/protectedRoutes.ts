import type { JSX } from "react";
import type { Role } from "./role";

export type protectedRoutes = {
  children: JSX.Element;
  role?: Role;
};
