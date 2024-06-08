import Lottie from "lottie-react";
import useGuide from "../../../hooks/useGuide";
import TourGuideCard from "./TourGuideCard";
import loaderAnimation from "../../../assets/loader.json";
import { Link } from "react-router-dom";
const OurTourGuide = () => {
    const [guides,loading] = useGuide();
    if (loading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>
  return (
    <div>
      <div className="text-center py-8 ">
        <h2 className=" text-2xl lg:text-4xl font-extrabold">
          Meet Our Tour Guides
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-6">
                      {
                        guides.slice(0,3).map(guide => <TourGuideCard key={guide._id} guide={guide} ></TourGuideCard>)
                       }  
                </div>
      
                <div className="my-4 text-center">
      <Link to={'/allGuides'}><button className="btn bg-[#59A1E5] text-white">All Guides </button></Link>
      
      </div>

    </div>
  );
};

export default OurTourGuide;
