import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ForgetPasswordVerify from "../pages/auth/ForgetPasswordVerify";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/forgot-password/verify" element={<ForgetPasswordVerify />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
        </>
    )
)

export default router