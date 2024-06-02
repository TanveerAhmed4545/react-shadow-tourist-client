import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const PackagesCard = ({pack,refetch}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,images,tourType,tripTitle,price,wishlist} = pack;
    
    const firstImage = images[0];
  return (
    <div>
      <div className="card  p-5 bg-base-100 rounded-md border-[#929c96] border-2 hover:border-none hover:shadow-xl hover:shadow-[#a3b3ab] transition duration-300 ease-in-out">
        <div className="relative">
          <figure>
            <img
              className="h-auto md:h-44 lg:h-52 w-full  rounded-md"
              src={firstImage}
            />
          </figure>
          <button className="absolute top-3 right-3 rounded-md   px-3 py-2 text-white  bg-[#94b0a4]">
            {}
          </button>
        </div>
        <div className="mt-3">
          <h2 className="card-title ">{tripTitle}</h2>
          <p className="flex items-center my-3 font-medium">
            Price : {price}
            <span className="text-[#5e6e67] mr-2">
              <BsCurrencyDollar />
            </span>
          </p>
          <div className="flex items-center justify-between mb-3">
            <p className="font-medium">Tour Type : {tourType} </p>
          </div>

          <div className="card-actions ">
            <Link to={""}>
              <button className="btn rounded-md w-full text-white border-none bg-[#80938b]">
                View Package
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
