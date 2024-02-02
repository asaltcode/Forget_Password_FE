import React from 'react'
import { Navigate } from 'react-router-dom'
import LogIn from '../components/LogIn'
import ForgotPassword from '../components/ForgotPassword'
import UserDashboard from '../components/UserDashboard'
import TopBar from '../common/TopBar'
import UserProductedRoute from './UserProductedRoute'
import OtpVerification from '../components/OtpVerification'
import NewPasswordSet from '../components/NewPasswordSet'

const AppRouters = [
    {
        path: "/user",
        element: <><UserProductedRoute><TopBar/><UserDashboard/></UserProductedRoute></>,
        exact: true
    },
    {
        path: "/",
        element: <LogIn/>,
        exact: true
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword/>,
        exact: true
    },
    {
        path: "/otp-verification",
        element: <OtpVerification/>,
        exact: true
    },
    {
        path: "/new-password",
        element: <NewPasswordSet/>,
        exact: true
    },
    {
        path: "/*",
        element: <Navigate to="/" />,
        exact: true
    },
]

export default AppRouters