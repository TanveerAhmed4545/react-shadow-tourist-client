import { BsCurrencyDollar } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

// eslint-disable-next-line react/prop-types
const PackagesCard = ({pack,refetch}) => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    // eslint-disable-next-line react/prop-types
    const {_id,images,tourType,tripTitle,price,wishlist} = pack;
    
    const firstImage = images[0];

    const handleWishlist = async(e) =>{
        e.preventDefault();
        // console.log("click");

        const email = user?.email;
        const name = user?.displayName;
        const wishlist = true;
        const packageId = _id;

        const wishData ={
            email,
            name,
            wishlist,
            packageId,
            tourType,
            price,
            tripTitle
        }
        const packData ={

            
            wishlist: true,
           
        }

        try{
            await axiosPublic.patch(`/wishlist-add/${_id}`,packData)
            refetch();
            const wishRes =  await axiosPublic.post('/wishlist-post',wishData);
            console.log(wishRes.data);
            
        if(wishRes.data.insertedId){
            toast.success("Added to WishList");
        }
        }catch (err) {
            console.log(err)
       }


    }


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
          <NavLink state={location.pathname}  to={!user && '/login'}>

          <button
          disabled ={wishlist}
          onClick={handleWishlist}
          className="absolute top-3 right-3  text-3xl    text-white  ">
          <FaHeart  className={`${wishlist ? 'text-red-600 ' : ''}`} />
          </button>
          </NavLink>
          
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
            <Link to={`/package-details/${_id}`}>
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
