import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home";
import Login from "../pages/home";
import Layout from "../components/layout";

export default function RouteP() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute path="/home">
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}
