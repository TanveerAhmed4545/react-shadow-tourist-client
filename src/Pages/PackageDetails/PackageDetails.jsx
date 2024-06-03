import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BsCurrencyDollar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
const PackageDetails = () => {
  const [tourDate, setTourDate] = useState(new Date());
  //   const { user } = useAuth();
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();
  const {
    data: details = {},
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["packagesDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/package/${id}`);
      return res.data;
    },
  });
//   console.log(details);
  const firstImage = details?.images?.[0];
  const twoImage = details?.images?.[1];
  const threeImage = details?.images?.[2];
  const allPic = [twoImage, threeImage];
//   console.log(allPic);

  const handleBookNow = (event) => {
    event.preventDefault();
    // Logic to handle booking
  };

  if (loading || !details)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Package Details</title>
      </Helmet>
      <div className="relative">
        <img
          src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Our Package Details
          </h1>
        </div>
      </div>
      <div className="card rounded-none   hover:shadow-2xl hover:shadow-[#707178]   my-5 lg:my-10 mx-5">
        <div className="">
          <figure>
            <img className=" lg:h-screen lg:w-full" src={firstImage} />
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {allPic && allPic.map((pic, idx) => <img className="h-auto md:h-64  lg:max-h-80 w-full" key={idx} src={pic} />)}
        </div>
        <div className="p-5 lg:p-10 space-y-5 ">
          <p className="text-xl font-semibold">
            Trip Title : {details?.tripTitle}{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5"></div>

          <p className="text-xl flex items-center">
            <span className="font-semibold ">Price : {details.price} </span>{" "}
            <span className="text-blue-gray-600 flex items-center">
              {" "}
              <BsCurrencyDollar className="" />
            </span>{" "}
          </p>
          <p className="text-xl">
            <span className="font-semibold ">
              Tour Type : {details?.tourType}{" "}
            </span>{" "}
            <span className="text-blue-gray-600"></span>
          </p>

          <p className="text-xl">
            <span className="font-semibold ">
              Description : {details?.description}{" "}
            </span>{" "}
            <span className="text-blue-gray-600"></span>
          </p>
          <p className="text-xl">
            <span className="font-semibold ">Tour plan : </span>{" "}
          </p>
          <div>
            {details?.tourPlan?.map((day, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200">
                <input
                  type="radio"
                  name="my-accordion-3"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-medium">
                  Day {day.day}
                </div>
                <div className="collapse-content">
                  <p>{day.activities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* form */}

      <div className="p-5 lg:p-10 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-5">
          Book Now{" "}
        </h2>
        <form onSubmit={handleBookNow}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-semibold">
                Name of the Package:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Tourist Name:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Tourist Email:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Price:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Tour Date:</label>
              <ReactDatePicker
                selected={tourDate}
                onChange={(date) => setTourDate(date)}
                className="input-field "
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Tour Guide Name:
              </label>
              <select className="select  w-full ">
                <option disabled defaultValue>
                  Select Guide
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
