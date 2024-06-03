import Lottie from "lottie-react";
import usePackage from "../../../hooks/usePackage";
import PackagesCard from "./PackagesCard";
import loaderAnimation from "../../../assets/loader.json";
import { Link } from "react-router-dom";


const OurPackages = () => {
    const [packages,loading,refetch] = usePackage();
    if (loading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>
    return (
        <div>
            <div>
             <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Discover Our Latest Packages 
             </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the Customer friendly  Packages  on our platform.{" "}
               </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
                      {
                        packages.slice(0,3).map(pack => <PackagesCard key={pack._id} pack={pack} refetch={refetch}></PackagesCard>)
                       }  
                </div>
        </div>
     <div className="my-4 text-center">
      <Link to={'/allPackages'}><button className="btn bg-[#4692ff] text-white">All Packages </button></Link>
      
      </div>   
        </div>
    );
};

export default OurPackages;