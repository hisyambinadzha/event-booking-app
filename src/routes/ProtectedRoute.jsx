import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly }) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && role !== "ADMIN") {
        // Non-admin trying to access admin-only route
        return <Navigate to="/dashboard" replace />;
    }

    if (adminOnly && role === "ADMIN") {
        // Admin trying to access non-admin route
        return <Navigate to="/reports" replace />;
    }

    // Otherwise, allow access
    return children;
}

export default ProtectedRoute;