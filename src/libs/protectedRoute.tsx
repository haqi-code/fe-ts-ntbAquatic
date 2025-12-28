import { Navigate } from "react-router";
import { getUserRole, isAuthenticated } from "./auth";
import type { protectedRoutes } from "../types/protectedRoutesType";

export default function ProtectedRoute({ children, role }: protectedRoutes) {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />
    }
    if (role && getUserRole() !== role) {
        return <Navigate to="/unauthorized" replace />
    }
    return children
}