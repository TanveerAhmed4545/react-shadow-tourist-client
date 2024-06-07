
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyBooking = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(0);

    const {data: booking=[],isLoading,refetch} = useQuery({
        queryKey: ['bookingGetEmail',user?.email,currentPage],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/booking-get/${user.email}/?page=${currentPage}`)
            return res.data;
        }
    })

    // const {booking,isLoading,refetch} = useBooking();

    
    const {data: totalCount={},isLoading:loading} = useQuery({
        queryKey: ['bookingCount',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookingCount/${user.email}`)
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
  
                    // Delete the Booking 
                    const { data } = await axiosSecure.delete(`/booking-delete/${id}`);
                   
  
                    //  booking  deleted
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Booking has been deleted.",
                            icon: "success"
                        });
                        refetch(); 
                    }
                } catch (error) {
                    console.error("Error cancelling Booking:", error);
                    // Show error cancellation
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to cancel Booking. Please try again later.",
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
        <title>Shadow Tourist || My Booking</title>
      </Helmet>
            <h2 className="text-center mb-5 text-2xl lg:text-4xl font-extrabold">
                My Booking
              </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-base-200">
        <th>
          #
        </th>
        <th>Image</th>
        <th>Package Name</th>
        <th>Guide Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        booking.map((book,idx) => (
            <tr key={book._id}>
        <th>
          {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded w-12 h-12">
                <img src={book.image}  />
              </div>
            </div>
            
          </div>
        </td>
        <td>
         {book.packageName}
          
        </td>
        <td>{book.tourGuideName}</td>
        <td>{book.email}</td>
        <td>{book.price} $</td>
        <td ><button className="btn btn-sm bg-green-200">{book.status}</button></td>
        <th>
          <button
          disabled={book?.status === 'Accepted' || book?.status === 'Rejected'}
           onClick={()=>handleDelete(book._id)}
          className="btn btn-ghost btn-sm bg-red-500 text-white">Delete</button>
        </th>
        <th>
         <Link to={`/dashboard/payment/${book?._id}`}>
         <button 
          disabled={book?.status !== 'Accepted'}
          className="btn btn-ghost btn-sm bg-green-500 text-white">Pay</button>
         </Link>
        </th>
      </tr>
        ) )
      }
     
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
           
           <div className="text-center my-5 mt-auto">
            
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

export default MyBooking;