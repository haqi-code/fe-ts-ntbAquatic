import type { Role } from "../types/roleType";

export const TimeKeeperEndpointMap: Record<Exclude<Role, "Juri">, string> = {
  Admin: "/admin/atlet",
  AdminIndependen: "/admin-independen/atlet",
};
