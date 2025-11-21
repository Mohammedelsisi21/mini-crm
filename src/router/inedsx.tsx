import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </>
    )
)

export default router