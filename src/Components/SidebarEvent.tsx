import { Check } from "lucide-react"

type MenuKey = "pendaftaran" | "juknis" | "lomba"

interface MenuItem {
    key: MenuKey,
    label: string
}

interface SidebarEventProps {
    onSelect: (key: MenuKey) => void
}

const menus: MenuItem[] = [
    { key: "pendaftaran", label: "Pendaftaran", },
    { key: "juknis", label: "Juknis" },
    { key: "lomba", label: "Lomba" }
]

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