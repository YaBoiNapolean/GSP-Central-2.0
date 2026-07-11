import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {

    // Temporary
    const authenticated = true;

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}