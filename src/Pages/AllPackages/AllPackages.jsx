import Lottie from "lottie-react";
import usePackage from "../../hooks/usePackage";
import AllPackCard from "./AllPackCard";
import loaderAnimation from "../../assets/loader.json";

const AllPackages = () => {
    const [packages,loading] = usePackage();
    
    if (loading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>

    return (
        <div>
            
            <div className="relative">
                <img src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-4xl lg:text-6xl font-bold">All Packages</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-5 px-6">
                      {
                        packages.map(pack => <AllPackCard key={pack._id} pack={pack}></AllPackCard>)
                       }  
                </div>
          


        </div>
    );
};

export default AllPackages;