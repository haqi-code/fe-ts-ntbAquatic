import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import DashboardAdminPage from "../Page/Admin/DashboardAdminPage";
import MultiEventAdminPage from "../Page/Admin/MultiEventAdminPage";

export default function adminRoutes() {
    return (
        <Route path="/admin" element={
            <ProtectedRoute role="Admin">
                <AdminLayout />
            </ProtectedRoute>
        }>
            
            <Route index element={<DashboardAdminPage />} />
            <Route path="multi-event" element={<MultiEventAdminPage />} />
        </Route>
    )
}