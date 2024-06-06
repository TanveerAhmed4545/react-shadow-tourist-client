import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import StoryCard from "../Home/OurStory/StoryCard";
import useStory from "../../hooks/useStory";

const AllStories = () => {

    const [stories,isLoading] = useStory();
  
    if (isLoading)
      return (
        <div className="flex justify-center items-center ">
          <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
        </div>
      );

    return (
        <div className="mb-5 md:mb-10">
            
            <Helmet>
        <title>Shadow Tourist || All Stories</title>
      </Helmet>
            {/* Hero Section */}
            <div className="relative">
                <img src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">All Stories</h1>
                </div>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2  gap-5 mt-5 px-6">
        {stories.slice(0,4).map((item) => (
          <StoryCard key={item._id} item={item}></StoryCard>
        ))}
      </div>
        </div>
    );
};

export default AllStories;