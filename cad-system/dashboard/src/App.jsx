import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/login/Login";

import DashboardLayout from "./components/layout/DashboardLayout";

import DashboardHome from "./pages/dashboard/DashboardHome";

import Departments from "./pages/departments/Departments";
import DepartmentPage from "./pages/department/DepartmentPage";

import Records from "./pages/records/Records";
import Performance from "./pages/performance/Performance";
import Administration from "./pages/administration/Administration";
import Settings from "./pages/settings/Settings";

import ProtectedRoute from "./router/ProtectedRoute";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/login"

                    element={<Login/>}

                />

                <Route

                    element={

                        <ProtectedRoute>

                            <DashboardLayout/>

                        </ProtectedRoute>

                    }

                >

                    <Route

                        path="/"

                        element={<DashboardHome/>}

                    />

                    <Route

                        path="/departments"

                        element={<Departments/>}

                    />

                    <Route

                        path="/departments/:departmentId"

                        element={<DepartmentPage/>}

                    />

                    <Route

                        path="/records"

                        element={<Records/>}

                    />

                    <Route

                        path="/performance"

                        element={<Performance/>}

                    />

                    <Route

                        path="/administration"

                        element={<Administration/>}

                    />

                    <Route

                        path="/settings"

                        element={<Settings/>}

                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}