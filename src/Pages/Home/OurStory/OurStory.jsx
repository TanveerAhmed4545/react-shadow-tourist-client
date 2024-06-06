import StoryCard from "./StoryCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import { Link } from "react-router-dom";
import useStory from "../../../hooks/useStory";
const OurStory = () => {
    const [stories,isLoading] = useStory();

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div className="mb-5 lg:mb-10">
      <div className="text-center py-8 ">
        <h2 className=" text-2xl lg:text-4xl font-extrabold">
          Our Customers Stories
        </h2>
        <p className=" pt-6 w-full mx-auto lg:w-9/12">
          Dive into captivating stories from fellow explorers. Discover
          inspiring tales and share your own unforgettable journeys.{" "}
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2  gap-5 mt-5 px-6">
        {stories.slice(0,4).map((item) => (
          <StoryCard key={item._id} item={item}></StoryCard>
        ))}
      </div>

      <div className="text-center my-4">
        <Link to={'/allStories'}>
        <button className="btn bg-blue-500 text-white">All Stories</button>
        </Link>
        
      </div>
    </div>
  );
};

export default OurStory;
