import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AssignedTours = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: assign=[],isLoading,refetch} = useQuery({
        queryKey: ['assignedTours',user?.email,currentPage],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/assign/${user.displayName}/?page=${currentPage}`)
            return res.data;
        }
    })

    // console.log(assign);



    const {data: totalCount={},isLoading:loading} = useQuery({
      queryKey: ['assignedCount',user?.email],
      queryFn: async()=>{
          const res = await axiosSecure.get(`/assignedCount/${user.email}`)
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
  

 

    const handleRejected = async(id) => {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Reject this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

          try{
            // 
            const res =   await axiosSecure.patch(`/booking-status/${id}`);
             console.log(res.data);
             if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
               title: "Rejected!",
               text: "Your file has been Rejected.",
               icon: "success"
             });
             }
             


          }catch(error){
            console.error("Error Rejected:", error);
            // Show error cancellation
            Swal.fire({
                title: "Error!",
                text: "Failed to cancel Rejected. Please try again later.",
                icon: "error"
            });
          }


         
        }
      });

    }

    const handleAccepted = async(id) => {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You want to accept this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Accept it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

          try{
            // 
            const res =   await axiosSecure.patch(`/booking-accepted/${id}`);
             console.log(res.data);
             if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
               title: "Accepted!",
               text: "Your file has been Accepted.",
               icon: "success"
             });
             }


          }catch(error){
            console.error("Error Accepted:", error);
            // Show error cancellation
            Swal.fire({
                title: "Error!",
                text: "Failed to cancel Accepted. Please try again later.",
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
    <div className="flex flex-col min-h-[90vh]">
      <Helmet>
        <title>Shadow Tourist || Assigned Tour</title>
      </Helmet>
      <h2 className="text-center mb-5 text-2xl lg:text-4xl font-extrabold">
                Assigned Tours
              </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#e5ebee]">
              <th>#</th>
              <th>Package Name</th>
              <th>Tourist Name</th>
              <th>Tour Date</th>
              <th>Tour price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              assign.map((item,idx) => (
                <tr key={item?._id}>
                <th>{idx+1}</th>
                <td>{item?.packageName}</td>
                <td>{item?.name}</td>
                <td>{moment(item?.date).format("MMM Do YY")}</td>
                <td>{item?.price} $</td>
                <td>{item?.status}</td>
                <td>
                <button
                onClick={()=>handleRejected(item?._id)}
                className="btn btn-ghost btn-sm bg-red-500 text-white">Rejected</button>
                </td>
                <td>
                <button 
                onClick={()=>handleAccepted(item?._id)}
                className="btn btn-ghost btn-sm bg-green-500 text-white">Accepted</button>
                </td>
              </tr>
              ))
            }
            
           
          </tbody>
        </table>
      </div>
      <div className="text-center py-5 mt-auto ">
            
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

export default AssignedTours;
