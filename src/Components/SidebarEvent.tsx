import { Check } from "lucide-react"
import type { SidebarEventProps } from "../types/sidebarEventType"
import { menus } from "../data/sidebarEventMenuData"

export default function SidebarEvent({ onSelect }: SidebarEventProps) {
    return (
        <div className="h-screen sticky top-0 bg-amber-200">
            <div className="w-1/6 h-[92vh] py-4 px-10 pt-3">
                {menus.map((menu) => (
                    <div
                        key={menu.key}
                        onClick={() => onSelect(menu.key)}
                        className="flex items-center gap-4 py-2 cursor-pointer"
                    >
                        <div className="bg-amber-800 rounded-full p-1">
                            <Check size={18} />
                        </div>
                        <p className="text-lg">{menu.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}