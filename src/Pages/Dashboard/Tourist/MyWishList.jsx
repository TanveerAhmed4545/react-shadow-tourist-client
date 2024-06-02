import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";

const MyWishList = () => {
    

    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: wishlists=[],isLoading,refetch} = useQuery({
        queryKey: ['wishlists',user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/wishlist/${user.email}`)
            return res.data;
        }
    })


    const handleDelete = async(id,packageId) => {
    
        // console.log(id,packageId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                try {
                    // Make  cancel the wishlist
                    await axiosPublic.patch(`/wishlists/${packageId}`);
  
                    // Delete the wishlist 
                    const { data } = await axiosPublic.delete(`/wishlist-delete/${id}`);
                   
  
                    //  booking  deleted
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Wishlist has been deleted.",
                            icon: "success"
                        });
                        refetch(); 
                    }
                } catch (error) {
                    console.error("Error cancelling wishlist:", error);
                    // Show error cancellation
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to cancel Wishlist. Please try again later.",
                        icon: "error"
                    });
                }
            }
          });
        
    }


    

    if(isLoading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Tour Type</th>
        <th>Trip Title</th>
        <th>Price</th>
        <th>Action</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
       wishlists.map((wish,idx)=> (<tr key={wish._id} className="bg-base-200">
       <th>{idx+1}</th>
       <td>{wish.tourType}</td>
       <td>{wish.tripTitle}</td>
       <td>{wish.price} $</td>
       <td>
           <button
           onClick={()=>handleDelete(wish._id,wish.packageId)}
           className="btn bg-red-400">Delete</button>
       </td>
       <td>
       <Link to={`/package-details/${wish.packageId}`}>
       <button className="btn bg-blue-500">View Package</button>
       </Link>
       </td>
     </tr>) )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyWishList;