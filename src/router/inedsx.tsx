import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </>
    )
)