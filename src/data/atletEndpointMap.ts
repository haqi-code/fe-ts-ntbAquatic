import type { Role } from "../types/roleType";

export const atletEndpointMap: Record<Exclude<Role, "Juri">, string> = {
  Admin: "/admin/atlet",
  AdminIndependen: "/independen-admin/atlet",
};
