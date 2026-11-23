import { createBrowserRouter,createRoutesFromElements,Routes, Route } from "react-router";
import Login from "../pages/Login";
const AppRoutes= createBrowserRouter(
    createRoutesFromElements(<>
    <Route path="/" element={<Login />} />
        <Routes>
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/students" element={<div>Students</div>} />
            <Route path="/attendance" element={<div>Attendance</div>} />
        </Routes>
    </>))

    export default AppRoutes;