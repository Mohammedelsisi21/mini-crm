import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ForgetPasswordVerify from "../pages/auth/VerifyCode";
import ErrorBoundary from "../pages/error/ErrorBoundary";
import NotFoundPage from "../pages/error/NotFoundPage";
import MainLayout from "../layout/DashboardLayout";
import HomePage from "../pages/dashboard";
import CustomersPage from "../pages/customers";
import CommunicationsPage from "../pages/communications";
import CategoriesPage from "../pages/categories";
import ProductsPage from "../pages/products";
import ComplaintsPage from "../pages/complaints";
import ReportsPage from "../pages/reports";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />} errorElement={<ErrorBoundary />}>
                <Route index element={<HomePage />} />
                <Route path="customers" element={<CustomersPage />} />
                <Route path="communications" element={<CommunicationsPage />} />
                <Route path="categories" element={<CategoriesPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="complaints" element={<ComplaintsPage />} />
                <Route path="reports" element={<ReportsPage />} />
            </Route>

            <Route path="/register" element={<Register />} errorElement={<ErrorBoundary />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} errorElement={<ErrorBoundary />}/>
            <Route path="/forgot-password/verify" element={<ForgetPasswordVerify />} errorElement={<ErrorBoundary />}/>
            <Route path="/resetPassword" element={<ResetPassword />} errorElement={<ErrorBoundary />}/>
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
)

export default router