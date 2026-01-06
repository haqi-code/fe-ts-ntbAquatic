import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import AdminIndependenLayout from "../layouts/AdminIndependenLayout";
import DashboardAdminIndependenPage from "../Page/AdminIndependen/DashboardAdminIndependen";
import MultiEventAdminIndependenPage from "../Page/AdminIndependen/MultiEventAdminIndependenPage";
import EventAdminIndependenPage from "../Page/AdminIndependen/EventAdminIndependen";
import TimeKeeperAdminIndependenPage from "../Page/AdminIndependen/TimeKeeperAdminPage";
import JuriAdminIndependenPage from "../Page/AdminIndependen/JuriAdminIndependenPage";
import AtletAdminIndependenPage from "../Page/AdminIndependen/Atlet/AtletAdminIndependenPage";
import AddAtletAdminIndependenPage from "../Page/AdminIndependen/Atlet/AddAtletAdminIndependenPage";

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
            <Route path="atlet" element={<AtletAdminIndependenPage role="AdminIndependen" />} />
            <Route path="tambah-atlet" element={<AddAtletAdminIndependenPage role="AdminIndependen" />} />
            <Route path="time-keeper" element={<TimeKeeperAdminIndependenPage role="AdminIndependen" />} />
            <Route path="juri" element={<JuriAdminIndependenPage role="AdminIndependen" />} />
        </Route>

    )
}