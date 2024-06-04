import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import PackTypeCard from "./PackTypeCard";

const TourTypeSection = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading ,error } = useQuery({
    queryKey: ["packagesDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get("/types");
      return res.data;
    },
  });
//   console.log(data);

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

    if (error) {
        return (
          <div className="text-center py-8">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-red-500">
              Error: {error.message}
            </h2>
          </div>
        );
      }
    
      if (!Array.isArray(data)) {
        return (
          <div className="text-center py-8">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-red-500">
              Error: Received data is not an array
            </h2>
          </div>
        );
      }

  return (
    <div>
      <div className="text-center py-8 ">
        <h2 className=" text-2xl lg:text-4xl font-extrabold">
          Discover Our Tour Type
        </h2>
        <p className=" pt-6 w-full mx-auto lg:w-9/12">
          Explore the Customer friendly Packages on our platform.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-5 px-6">
      {data.map((type) => (
          <PackTypeCard key={type._id} type={type}></PackTypeCard>
        ))}
      </div>
    </div>
  );
};

export default TourTypeSection;
