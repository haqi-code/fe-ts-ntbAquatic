import { useLocation, useNavigate } from "react-router"
import { menus } from "../data/sidebarMenuData"
import type { SidebarProps } from "../types/sidebarType"

export default function Sidebar({ role }: SidebarProps) {

    const navigate = useNavigate()
    const location = useLocation()

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