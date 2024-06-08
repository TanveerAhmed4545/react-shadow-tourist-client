import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyWishList = () => {
    
  const [currentPage, setCurrentPage] = useState(0);

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: wishlists=[],isLoading,refetch} = useQuery({
        queryKey: ['wishlists',user?.email,currentPage],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/wishlist/${user.email}/?page=${currentPage}`)
            return res.data;
        }
    })

    const {data: totalCount={},isLoading:loading} = useQuery({
      queryKey: ['wishlistCount',user?.email],
      queryFn: async()=>{
          const res = await axiosSecure.get(`/wishlistCount/${user.email}`)
          return res.data;
      }
  })
  const {count} = totalCount;
  const itemsPerPage = 10;
 
  const numberOfPages = Math.ceil(count/itemsPerPage);
  const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];
  // console.log(count,itemsPerPage,numberOfPages,pages);

  const handlePrevPage = () =>{
   if(currentPage > 0){
    setCurrentPage(currentPage - 1);
   }
  }

  const handleNextPage = () =>{
    if(currentPage < pages.length - 1){
     setCurrentPage(currentPage + 1);
    }
   }


    const handleDelete = async(id) => {
    
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
                    // await axiosPublic.patch(`/wishlists/${packageId}`);
  
                    // Delete the wishlist 
                    const { data } = await axiosSecure.delete(`/wishlist-delete/${id}`);
                   
  
                    //  Wishlist  deleted
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


    

    if(isLoading || loading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
  </div>


    return (
        <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Shadow Tourist || My WishList</title>
      </Helmet>
      <h2 className="text-center mb-5 text-2xl lg:text-4xl font-extrabold">
                My Wishlist
              </h2>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="bg-base-200">
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
       wishlists.map((wish,idx)=> (<tr key={wish._id} className="hover">
       <th>{idx+1}</th>
       <td>{wish.tourType}</td>
       <td>{wish.tripTitle}</td>
       <td>{wish.price} $</td>
       <td>
           <button
           onClick={()=>handleDelete(wish._id)}
           className="btn bg-red-500 text-white">Delete</button>
       </td>
       <td>
       <Link to={`/package-details/${wish.packageId}`}>
       <button className="btn bg-blue-500 text-white">View Package</button>
       </Link>
       </td>
     </tr>) )
      }
      
      
    </tbody>
  </table>
</div>

<div className="text-center py-5 mt-auto">
            
            <button
            onClick={handlePrevPage}
            className=" btn btn-md mr-1">«</button>
            {
             pages.map((page,idx) => <button
             onClick={()=> setCurrentPage(page)}
             key={idx} 
             className={currentPage === page ? 'btn btn-md btn-active mr-1' : 'btn  btn-md mr-1'}
             >{page + 1}</button>)
            }
            <button
            onClick={handleNextPage}
            className=" btn btn-md mr-1">»</button>
           </div>

        </div>
    );
};

export default MyWishList;