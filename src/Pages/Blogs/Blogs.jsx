import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import BlogCard from "./BlogCard";


const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: blogs=[], isLoading  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });
 
  console.log(blogs);

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Blogs</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://i.ibb.co/B4GNX8T/pexels-rachel-claire-4993240-1.jpg"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">
            Welcome to Our Blogs Page
          </h1>
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2  gap-5 my-5 px-6">
        {blogs.map((item) => (
          <BlogCard key={item._id} item={item}></BlogCard>
        ))}
      </div>
      
       

    </div>
  );
};

export default Blogs;
