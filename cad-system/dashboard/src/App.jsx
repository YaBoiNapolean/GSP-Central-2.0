import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Login from "./pages/login/Login";
import DashboardHome from "./pages/dashboard/DashboardHome";

import ProtectedRoute from "./router/ProtectedRoute";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={

                        <ProtectedRoute>

                            <DashboardLayout>

                                <DashboardHome />

                            </DashboardLayout>

                        </ProtectedRoute>

                    }
                />

            </Routes>

        </BrowserRouter>

    );

}