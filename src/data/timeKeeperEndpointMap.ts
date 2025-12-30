import type { Role } from "../types/roleType";

export const TimeKeeperEndpointMap: Record<Exclude<Role, "Juri">, string> = {
  Admin: "/admin/time-keeper",
  AdminIndependen: "/independen-admin/nopag/time-keeper",
};
