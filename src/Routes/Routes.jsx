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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import MyWishList from "../Pages/Dashboard/Tourist/MyWishList";
import AllPackages from "../Pages/AllPackages/AllPackages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/allPackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/package-details/:id",
        element: <PrivateRoute>
          <PackageDetails></PackageDetails>
        </PrivateRoute>,
      }
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
        element: <PrivateRoute>
          <Statistics></Statistics>
        </PrivateRoute>
      },
      {
        path: 'admin-profile',
        element: <PrivateRoute>
          <AdminRoute>
          <AdminProfile></AdminProfile>
        </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'add-package',
        element: <PrivateRoute>
          <AdminRoute>
          <AddPackage></AddPackage>
        </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'manage-users',
        element: <PrivateRoute>
          <AdminRoute>
          <ManageUser></ManageUser>
        </AdminRoute>
        </PrivateRoute>
      }
      ,
      {
        path: 'request-to-admin',
        element: <PrivateRoute>
          <RequestToAdmin></RequestToAdmin>
        </PrivateRoute>
      },
      {
        path: 'my-wishlist',
        element: <PrivateRoute>
          <MyWishList></MyWishList>
        </PrivateRoute>
      }
    ],
  },
]);
