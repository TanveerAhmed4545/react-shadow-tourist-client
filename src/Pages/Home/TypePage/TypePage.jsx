import { useParams } from "react-router-dom";
import usePackage from "../../../hooks/usePackage";
import PackagesCard from "../OurPackages/PackagesCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";

const TypePage = () => {
  const { id } = useParams();
  // console.log(id);
  const [packages, loading, refetch] = usePackage();
  const detailsPack = packages.filter((d) => d.tourType == id);
  // console.log(detailsPack)

  if (loading) return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            All Cards
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 mx-5">
        {detailsPack.map((pack) => (
          <PackagesCard
            key={pack._id}
            pack={pack}
            refetch={refetch}
          ></PackagesCard>
        ))}
      </div>
    </div>
  );
};

export default TypePage;
