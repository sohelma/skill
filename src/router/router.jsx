import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Skills from "../pages/Skills";
import SkillDetails from "../pages/SkillDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Skills /> },
      { 
        path: "/skill/:id",
        element: (
          <ProtectedRoute>
            <SkillDetails />
          </ProtectedRoute>
        )
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> }
    ]
  }
]);

export default router;
