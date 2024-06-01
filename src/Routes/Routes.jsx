import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import RequestToAdmin from "../Pages/Dashboard/Guide/RequestToAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Statistics></Statistics>
      },
      {
        path: 'admin-profile',
        element: <AdminProfile></AdminProfile>
      },
      {
        path: 'add-package',
        element: <AddPackage></AddPackage>
      },
      {
        path: 'manage-users',
        element: <ManageUser></ManageUser>
      }
      ,
      {
        path: 'request-to-admin',
        element: <PrivateRoute>
          <RequestToAdmin></RequestToAdmin>
        </PrivateRoute>
      }
    ],
  },
]);
