import { Calendar, ClipboardList, Gavel, Home, Medal } from "lucide-react";
import type { MenuSection } from "../types/sidebarType";
import type { Role } from "../types/roleType";


export const menus: Record<Role, MenuSection[]> = {
    Admin: [
        {
            title: "Menu",
            items: [
                { key: "", label: "Dashboard", path: "/admin", icon: <Home size={18} /> },
                { key: "multiEventAdmin", label: "Multi Event", path: "/admin/multi-event", icon: <ClipboardList size={18} /> },
                { key: "eventAdmin", label: "Event", path: "/admin/event", icon: <Calendar size={18} /> }
            ]
        },
        {
            title: "Master Data",
            items: [
                { key: "atletAdmin", label: "Atlet", path: "/admin/atlet", icon: <Medal size={18} /> },
                { key: "timeKeeperAdmin", label: "Time Keeper", path: "/admin/time-keeper", icon: <Gavel size={18} /> },
                { key: "juri", label: "Juri", path: "/admin/juri", icon: <Gavel size={18} /> }
            ]
        }
    ],

    AdminIndependen: [
        {
            title: "Menu",
            items: [
                { key: "", label: "Dashboard", path: "/admin-independen", icon: <Home size={18} /> },
                { key: "multiEventAdminIndependen", label: "Multi Event", path: "/admin-independen/multi-event", icon: <ClipboardList size={18} /> },
                { key: "eventAdminIndependen", label: "Event", path: "/admin-independen/event", icon: <Calendar size={18} /> }
            ]
        },
        {
            title: "Master Data",
            items: [
                { key: "atletAdmin", label: "Atlet", path: "/admin-independen/atlet", icon: <Medal size={18} /> },
                { key: "juri", label: "Juri", path: "/admin-independen/juri", icon: <Gavel size={18} /> }
            ]
        }
    ],

    Juri: [
        {
            title: "Menu",
            items: [
                { key: "", label: "Dashboard", path: "/juri", icon: <Home size={18} /> },
                { key: "multiEventJuri", label: "Multi Event", path: "/juri/multi-event-admin-independen", icon: <ClipboardList size={18} /> },
                { key: "eventJuri", label: "Event", path: "/event", icon: <Calendar size={18} /> }
            ]
        },
        {
            title: "Master Data",
            items: [
                { key: "atletAdmin", label: "Atlet", path: "/atlet", icon: <Medal size={18} /> },
                { key: "timeKeeperAdmin", label: "Time Keeper", path: "/time-keeper", icon: <Gavel size={18} /> }
            ]
        }
    ]
}