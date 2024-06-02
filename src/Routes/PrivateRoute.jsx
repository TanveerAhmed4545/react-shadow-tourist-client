import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user,loading } = useAuth();
    const location = useLocation();
  
  
    if(loading){
      return <div className="flex justify-center items-center ">
      <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
    </div>
    }
  
    if (user) {
      return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  };
  
  export default PrivateRoute;
