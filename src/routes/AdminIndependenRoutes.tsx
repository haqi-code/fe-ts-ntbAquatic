import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import AdminIndependenLayout from "../layouts/AdminIndependenLayout";
import DashboardAdminIndependenPage from "../Page/AdminIndependen/DashboardAdminIndependen";
import MultiEventAdminIndependenPage from "../Page/AdminIndependen/MultiEventAdminIndependenPage";
import EventAdminIndependenPage from "../Page/AdminIndependen/EventAdminIndependen";
import AtletIndependenPage from "../Page/AdminIndependen/AtletAdminIndependenPage";
import TimeKeeperAdminIndependenPage from "../Page/AdminIndependen/TimeKeeperAdminPage";

export default function AdminIndependenRoutes() {
    return (
        <Route
            path="/admin-independen"
            element={<ProtectedRoute
                role="AdminIndependen">
                <AdminIndependenLayout />
            </ProtectedRoute>}>
            <Route index element={<DashboardAdminIndependenPage />} />
            <Route path="multi-event" element={<MultiEventAdminIndependenPage role="AdminIndependen" />} />
            <Route path="event" element={<EventAdminIndependenPage role="AdminIndependen" />} />
            <Route path="atlet" element={<AtletIndependenPage role="AdminIndependen" />} />
            <Route path="time-keeper" element={<TimeKeeperAdminIndependenPage role="AdminIndependen" />} />
        </Route>

    )
}