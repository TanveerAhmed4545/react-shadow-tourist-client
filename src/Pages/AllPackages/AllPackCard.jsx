import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AllPackCard = ({pack}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,images,tourType,tripTitle,price} = pack;
    const firstImage = images[0];
    return (
        <div>
            <div className="card card-compact rounded-md h-auto md:min-h-[570px]  bg-base-100 shadow-xl">
  <figure><img className="max-h-80 w-full" src={firstImage} /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p><span className="font-semibold">Trip Title : {tripTitle} </span> </p>
    <div className="flex">
    <p className="font-semibold flex items-center gap-2">Price : {price}  <BsCurrencyDollar className="text-[#599fe5]"/></p>
    </div>
    <p className="font-semibold">Tour Type : {tourType}</p>
    <div >
    <Link to={`/package-details/${_id}`}><button className="btn  w-full text-white border-none bg-[#599fe5]">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllPackCard;