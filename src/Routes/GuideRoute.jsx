import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

// eslint-disable-next-line react/prop-types
const GuideRoute = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <div className="flex justify-center items-center ">
  <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
</div>
  if (role === 'guide') return children
  return <Navigate to='/dashboard' />
};

export default GuideRoute;