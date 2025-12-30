import type { MenuType } from "../types/menuType";
import type { Role } from "../types/roleType";

export const multiEventEndpointMap: Record<
    Exclude<Role, "Juri">,
    Record<MenuType, string>
> = {
    Admin: {
        semua: "/admin/multi-event",
        akanDatang: "/admin/multi-event",
        sedangBerlangsung: "/admin/multi-event?status=Berlangsung",
        selesai: "/admin/multi-event?status=Selesai",
    },

    AdminIndependen: {
        semua: "/independen-admin/multi-event",
        akanDatang: "/independen-admin/multi-event",
        sedangBerlangsung: "/independen-admin/multi-event?status=Berlangsung",
        selesai: "/independen-admin/multi-event?status=Selesai",
    },
}
