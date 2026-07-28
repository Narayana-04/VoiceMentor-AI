import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const auth = useAuth();

    console.log("Auth =", auth);

    if (!auth) {
        return <h1>Provider Missing</h1>;
    }

    if (!auth.user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}