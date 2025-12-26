import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import AdminIndependenLayout from "../layouts/AdminIndependenLayout";
import DashboardAdminIndependenPage from "../Page/AdminIndependen/DashboardAdminIndependen";
import MultiEventAdminIndependenPage from "../Page/AdminIndependen/MultiEventAdminIndependenPage";

export default function AdminIndependenRoutes() {
    return (
        <Route
            path="/admin-independen"
            element={<ProtectedRoute
                role="AdminIndependen">
                <AdminIndependenLayout />
            </ProtectedRoute>}>
            <Route index element={<DashboardAdminIndependenPage />} />
            <Route path="multi-event-admin-independen" element={<MultiEventAdminIndependenPage />} />
        </Route>

    )
}