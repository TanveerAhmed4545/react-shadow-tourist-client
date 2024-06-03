import Lottie from "lottie-react";
import useGuide from "../../../hooks/useGuide";
import TourGuideCard from "./TourGuideCard";
import loaderAnimation from "../../../assets/loader.json";
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
                        guides.map(guide => <TourGuideCard key={guide._id} guide={guide} ></TourGuideCard>)
                       }  
                </div>
      


    </div>
  );
};

export default OurTourGuide;
