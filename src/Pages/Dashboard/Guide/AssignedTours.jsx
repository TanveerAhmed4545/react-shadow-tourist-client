import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";

const AssignedTours = () => {

  const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: assign=[],isLoading,refetch} = useQuery({
        queryKey: ['assignedTours',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/assign/${user.displayName}`)
            return res.data;
        }
    })

    // console.log(assign);
 

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

    if(isLoading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
    </div>

  return (
    <div>
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
    </div>
  );
};

export default AssignedTours;
