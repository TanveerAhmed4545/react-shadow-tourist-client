import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PackTypeCard = ({type}) => {
     // eslint-disable-next-line react/prop-types
     const {tourType,img} = type;
  return (
    <div>
      <div className="card rounded-md  p-5 bg-base-100  border-[#D9EEFF]  border hover:border-none hover:shadow-md hover:shadow-[#59a1e5] transition duration-300 ease-in-out">
        <div className="relative">
          <figure>
            <img
              className="h-auto md:h-44 lg:h-72 w-full  rounded-md"
              src={img}
            />
          </figure>
        </div>

        <p className="my-3 text-center uppercase font-bold hover:text-[#59a1e5]">
          {tourType}
        </p>

        <div>
          <Link to={`/typePage/${tourType}`}>
            <button className="btn rounded-md w-full text-white border-none bg-[#59a1e5]">
            View Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackTypeCard;
