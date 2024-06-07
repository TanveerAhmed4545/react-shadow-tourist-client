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
import TourGuideProfile from "../Pages/TourGuideProfile/TourGuideProfile";
import MyBooking from "../Pages/Dashboard/Tourist/MyBooking";
import GuideProfile from "../Pages/Dashboard/Guide/GuideProfile";
import AssignedTours from "../Pages/Dashboard/Guide/AssignedTours";
import TypePage from "../Pages/Home/TypePage/TypePage";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import GuideRoute from "./GuideRoute";
import TouristProfile from "../Pages/Dashboard/Tourist/TouristProfile";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import AllStories from "../Pages/AllStories/AllStories";
import Blogs from "../Pages/Blogs/Blogs";
import Community from "../Pages/Community/Community";
import AllGuides from "../Pages/AllGuides/AllGuides";

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/community",
        element: <Community></Community>,
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
        path: "/allGuides",
        element: <AllGuides></AllGuides>,
      },
      {
        path: "/guide-Profile/:id",
        element: <TourGuideProfile></TourGuideProfile>,
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
        path: '/storyDetails/:id',
        element: <StoryDetails></StoryDetails>
      },
      {
        path: '/allStories',
        element: <AllStories></AllStories>
      },
      {
        path: "/package-details/:id",
        element: <PackageDetails></PackageDetails>,
      },
      {
        path: '/typePage/:id',
        element: <TypePage></TypePage>
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
        path: 'payment/:id',
        element: <PrivateRoute>
          <Payment></Payment>
        </PrivateRoute>
      },
      {
        path: 'payment-history',
        element: <PrivateRoute>
          <PaymentHistory></PaymentHistory>
        </PrivateRoute>
      },
      {
        path: 'touristProfile',
        element: <PrivateRoute>
          <TouristProfile></TouristProfile>
        </PrivateRoute>
      },
      {
        path: 'my-booking',
        element: <PrivateRoute>
          <MyBooking></MyBooking>
        </PrivateRoute>
      },
      {
        path: 'guideProfile',
        element: <PrivateRoute>
          <GuideRoute>
          <GuideProfile></GuideProfile>
          </GuideRoute>
        </PrivateRoute>
      },
      {
        path: 'assignedTours',
        element: <PrivateRoute>
          <GuideRoute>
          <AssignedTours></AssignedTours>
          </GuideRoute>
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
