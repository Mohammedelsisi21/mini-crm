import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ForgetPasswordVerify from "../pages/auth/ForgetPasswordVerify";
import ErrorBoundary from "../pages/error/ErrorBoundary";
import NotFoundPage from "../pages/error/NotFoundPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/register" element={<Register />} errorElement={<ErrorBoundary />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} errorElement={<ErrorBoundary />}/>
            <Route path="/forgot-password/verify" element={<ForgetPasswordVerify />} errorElement={<ErrorBoundary />}/>
            <Route path="/resetPassword" element={<ResetPassword />} errorElement={<ErrorBoundary />}/>

            <Route path="*" element={<ErrorBoundary />} />
        </>
    )
)

export default router