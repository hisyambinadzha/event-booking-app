import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly }) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // Not logged in → go to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Admin-only route but user is not admin → go to dashboard
    if (adminOnly && role !== "ADMIN") {
        return <Navigate to="/dashboard" replace />;
    }

    // Otherwise allow access
    return children;
}

export default ProtectedRoute;
