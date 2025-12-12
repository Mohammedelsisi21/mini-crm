import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "../auth/ProtectedRoute";

const MainLayout = lazy(() => import('../layout/DashboardLayout'))
const HomePage = lazy(() => import('../pages/dashboard'))
const CustomersPage = lazy(() => import('../pages/customers'))
const CommunicationsPage = lazy(() => import('../pages/communications'))
const CategoriesPage = lazy(() => import('../pages/categories'))
const ProductsPage = lazy(() => import('../pages/products'))
const ComplaintsPage = lazy(() => import('../pages/complaints'))
const ReportsPage = lazy(() => import('../pages/reports'))

//** Error Page */
const ErrorBoundary = lazy(() => import('../pages/error/ErrorBoundary'))
const NotFoundPage = lazy(() => import('../pages/error/NotFoundPage'))

//** Auth Page */
const Register = lazy(() => import('../pages/auth/Register'))
const Login = lazy(() => import('../pages/auth/Login'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))
const VerifyCode = lazy(() => import('../pages/auth/VerifyCode'))


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<ProtectedRoute isAllowed={true} redirectPath="/login" children={<MainLayout />}/>} errorElement={<ErrorBoundary />}>
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
            <Route path="/forgot-password" element={<ForgotPassword />} errorElement={<ErrorBoundary />}/>
            <Route path="/forgot-password/verify" element={<VerifyCode />} errorElement={<ErrorBoundary />}/>
            <Route path="/resetPassword" element={<ResetPassword />} errorElement={<ErrorBoundary />}/>
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
)

export default router