import { Outlet, useLocation } from "react-router";
import Sidebar from "../Components/Sidebar";

export default function JuriLayout() {

    const location = useLocation()
    const handleSidebar = location.pathname.includes(
        "multi-event-juri-event"
    )

    return (
        <div className="flex h-screen w-full">
            {!handleSidebar && <Sidebar role="Juri" />}
            <div className="flex-1 overflow-auto bg-gray-100">
                <Outlet />
            </div>
        </div>

    )
}