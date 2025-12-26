import type { JSX } from "react"
import type { Role } from "../types/role"
import { Calendar, ClipboardList, Gavel, Home, Medal } from "lucide-react"
import { useLocation, useNavigate } from "react-router"

type MenuItem = {
    key: string,
    path: string,
    label: string,
    icon: JSX.Element
}

type MenuSection = {
    title: string,
    items: MenuItem[]
}

type SidebarProps = {
    role: Role
}


export default function Sidebar({ role }: SidebarProps) {

    const navigate = useNavigate()
    const location = useLocation()

    const menus: Record<Role, MenuSection[]> = {
        Admin: [
            {
                title: "Menu",
                items: [
                    { key: "", label: "Dashboard", path: "/admin", icon: <Home size={18} /> },
                    { key: "multiEventAdmin", label: "Multi Event", path: "/multi-event", icon: <ClipboardList size={18} /> },
                    { key: "eventAdmin", label: "Event", path: "/event", icon: <Calendar size={18} /> }
                ]
            },
            {
                title: "Master Data",
                items: [
                    { key: "atletAdmin", label: "Atlet", path: "/atlet", icon: <Medal size={18} /> },
                    { key: "timeKeeperAdmin", label: "Time Keeper", path: "/time-keeper", icon: <Gavel size={18} /> }
                ]
            }
        ],

        AdminIndependen: [
            {
                title: "Menu",
                items: [
                    { key: "", label: "Dashboard", path: "/admin-independen", icon: <Home size={18} /> },
                    { key: "multiEventAdminIndependen", label: "Multi Event", path: "/multi-event-admin-independen", icon: <ClipboardList size={18} /> },
                    { key: "eventAdminIndependen", label: "Event", path: "/event", icon: <Calendar size={18} /> }
                ]
            },
            {
                title: "Master Data",
                items: [
                    { key: "atletAdmin", label: "Atlet", path: "/atlet", icon: <Medal size={18} /> },
                    { key: "timeKeeperAdmin", label: "Time Keeper", path: "/time-keeper", icon: <Gavel size={18} /> }
                ]
            }
        ],

        Juri: [
            {
                title: "Menu",
                items: [
                    { key: "", label: "Dashboard", path: "/juri", icon: <Home size={18} /> },
                    { key: "multiEventJuri", label: "Multi Event", path: "/multi-event-admin-independen", icon: <ClipboardList size={18} /> },
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

    const roleMenus = menus[role]

    return (
        <div className="h-screen w-64 bg-blue-900 text-white flex flex-col sticky top-0">
            <div className="p-4 text-xl font-bold border-b border-blue-700">
                {role} Panel
            </div>

            <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
                {roleMenus.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-sm uppercase text-gray-300 mb-2">
                            {section.title}
                        </h2>

                        {section.items.map((menu) => (
                            <button key={menu.key} onClick={() => navigate(menu.path)} className={`flex items-center w-full px-3 py-2 rounded transition ${location.pathname === menu.path
                                ? "bg-blue-700 font-semibold"
                                : "hover:bg-blue-700"
                                }`} >
                                <span className="mr-2">{menu.icon}</span>
                                {menu.label}</button>
                        ))}
                    </div>
                ))}
            </nav>
        </div>
    )
}