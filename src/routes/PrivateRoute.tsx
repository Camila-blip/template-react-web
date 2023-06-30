import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: any) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
