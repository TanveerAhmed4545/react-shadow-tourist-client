import { Helmet } from "react-helmet-async";
import TourGuideCard from "../Home/OurTourGuide/TourGuideCard";
import Lottie from "lottie-react";
import useGuide from "../../hooks/useGuide";
import loaderAnimation from "../../assets/loader.json";


const AllGuides = () => {
    const [guides,loading] = useGuide();
    if (loading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>


    return (
        <div>
      <Helmet>
        <title>Shadow Tourist || All Guides</title>
      </Helmet>
            <div className="relative">
                <img src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">Our All Guides</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-5 px-6">
                      {
                        guides.map(guide => <TourGuideCard key={guide._id} guide={guide} ></TourGuideCard>)
                       }  
                </div>
          
           

        </div>
    );
};

export default AllGuides;