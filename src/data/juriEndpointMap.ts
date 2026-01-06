import type { Role } from "../types/roleType";

export const juriEndpointMap: Record<Exclude<Role, "Juri">, string> = {
  Admin: "/admin/juri",
  AdminIndependen: "/independen-admin/nopag/juri",
};
