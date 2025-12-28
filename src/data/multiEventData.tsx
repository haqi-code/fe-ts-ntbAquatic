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
        semua: "/admin-independen/multi-event",
        akanDatang: "/admin-independen/multi-event",
        sedangBerlangsung: "/admin-independen/multi-event?status=Berlangsung",
        selesai: "/admin-independen/multi-event?status=Selesai",
    },
}
