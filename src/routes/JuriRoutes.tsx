import { Route } from "react-router";
import ProtectedRoute from "../libs/protectedRoute";
import JuriLayout from '../layouts/JuriLayout';
import DashboardJuriPage from "../Page/Juri/DashboardJuriPage";

export default function JuriRoutes() {
    return (
        <Route path="/juri" element={<ProtectedRoute role="Juri"><JuriLayout /></ProtectedRoute>}>
            <Route index element={<DashboardJuriPage />} />

        </Route>
    )
}