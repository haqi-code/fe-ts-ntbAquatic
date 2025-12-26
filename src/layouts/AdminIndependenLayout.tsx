import { Outlet, useLocation } from "react-router"
import Sidebar from "../Components/Sidebar"

export default function AdminIndependenLayout() {
    const location = useLocation()

    const handleSidebar = location.pathname.includes(
        "multi-event-admin-independen/detail"
    )
    return (
        <div className="flex h-screen w-full">
            {!handleSidebar && <Sidebar role="AdminIndependen"/>}
            <div className="flex-1 overflow-auto bg-gray-100">
                <Outlet />
            </div>
        </div>
    )
}