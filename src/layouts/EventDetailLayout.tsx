import { Outlet } from "react-router";
import SidebarEvent from "../Components/SidebarEvent";
import type { MenuKey } from "../types/sidebarEventType";

export default function EventDetailLayout() {
    const handleSelect = (key: MenuKey) => {
        console.log("menu aktif:", key);
    };

    return (
        <div className="flex h-screen w-full">
            <SidebarEvent onSelect={handleSelect} />
            <div className="flex-1 overflow-auto bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
}
