import type { MenuType } from "../types/menuType"
import type { Role } from "../types/roleType"

export const eventEndpointMap: Record<
    Exclude<Role, "Juri">,
    Record<MenuType, string>
> = {
    Admin: {
        semua: "/admin/event",
        akanDatang: "/admin/event",
        sedangBerlangsung: "/admin/event?status=Berlangsung",
        selesai: "/admin/event?status=Selesai",
    },

    AdminIndependen: {
        semua: "/independen-admin/event",
        akanDatang: "/independen-admin/event",
        sedangBerlangsung: "/independen-admin/event?status=Berlangsung",
        selesai: "/independen-admin/event?status=Selesai",
    },
}
