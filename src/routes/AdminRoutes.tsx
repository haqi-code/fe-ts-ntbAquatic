import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import DashboardAdminPage from "../Page/Admin/DashboardAdminPage";
import MultiEventAdminPage from "../Page/Admin/MultiEventAdminPage";
import EventAdminPage from "../Page/Admin/EventAdminPage";
import AtletAdminPage from "../Page/Admin/Atlet/AtletAdminPage";
import TimeKeeperAdminPage from '../Page/Admin/TimeKeeperAdminPage';
import JuriAdminPage from "../Page/Admin/JuriAdminPage";
import AddAtletAdminPage from "../Page/Admin/Atlet/AddAtletAdminPage";
import EditAtletAdminPage from "../Page/Admin/Atlet/EditAtletAdminPage";
import EventDetailLayout from "../layouts/EventDetailLayout";

export default function adminRoutes() {
    return (
        <Route path="/admin" element={
            <ProtectedRoute role="Admin">
                <AdminLayout />
            </ProtectedRoute>
        }>

            <Route index element={<DashboardAdminPage />} />
            <Route path="multi-event" element={<MultiEventAdminPage role="Admin" />} />
            <Route path="event" element={<EventAdminPage role="Admin" />} />

            <Route path="atlet" element={<AtletAdminPage role="Admin" />} />
            <Route path="tambah-atlet" element={<AddAtletAdminPage role="Admin" />} />
            <Route path="atlet/:id/edit" element={<EditAtletAdminPage role="Admin" />} />

            <Route path="time-keeper" element={<TimeKeeperAdminPage role="Admin" />} />
            <Route path="juri" element={<JuriAdminPage role="Admin" />} />

        </Route>

        
    )
}