import { Helmet } from "react-helmet-async";
import {  NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import moment from "moment";
import { FacebookShareButton } from "react-share";
import useAuth from "../../hooks/useAuth";

const StoryDetails = () => {
  const { id } = useParams();
  const {user} =useAuth();
  const location = useLocation();
 

  const axiosPublic = useAxiosPublic();
  const { data: details = {}, isLoading } = useQuery({
    queryKey: ["storyDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/story/${id}`);
      return res.data;
    },
  });

  console.log(details);

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );
  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Story Details</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative">
        <img
        //   src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg"
        src={details?.imageUrl}  
        alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Story Details
          </h1>
        </div>
      </div>




      <div>
        <div className="block  my-5 md:my-10 mx-5 gap-3  group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
          <img
            src={details?.imageUrl}
            alt=""
            className="object-cover w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-4 lg:col-span-5">
            <div className="flex space-x-4">
              <img
                alt=""
                src={details?.profilePicture}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <p
                 
                  className="text-sm font-semibold"
                >
                  {details?.name}
                </p>
                <span className="text-xs dark:text-gray-600"> {moment(details?.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {details?.title}
            </h3>
            
            <p className="pb-3">{details?.story}</p>
            {/* <FacebookShareButton url={'https://react-haven-hearth.web.app/'} >
           <button className="bg-blue-400 btn text-white">Share on Facebook</button>  
          </FacebookShareButton> */}

          {!user ? (
              <NavLink  to="/login" state={{from: location}} replace>
                <button
                  type="button"
                  className="bg-[#4692FF] hover:bg-[#82b2f7] text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Login to Share
                </button>
              </NavLink>
            ) : (
                <FacebookShareButton url={'https://react-haven-hearth.web.app/'} >
                <button className="bg-blue-400 btn text-white">Share on Facebook</button>  
               </FacebookShareButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
