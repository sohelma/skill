//src/router/router

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";
import ProtectedRoute from "../routes/ProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword";
import AboutUs from "../pages/AboutUs";
import AllItems from "../pages/AlliIems";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
     errorElement: <ErrorPage />, // <-- এই লাইনটি যোগ করুন
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/allItems", element: <AllItems /> },
      { path: "/contact", element: <ContactUs /> },
      
       
 


      // Protected skill detail route
      {
        path: "/skill/:id",
        element: (
          <ProtectedRoute>
            <SkillDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
