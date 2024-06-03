import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const RequestToAdmin = () => {
      const {user} = useAuth();
      const axiosPublic = useAxiosPublic();
    const handleForm = async(e) =>{
        e.preventDefault();
        try{
            const currentUser = {
            email: user?.email,
            role: 'tourist',
            status: 'Requested',
          }
          const {data} = await axiosPublic.put(`/user`,currentUser)
          console.log(data);
          if(data.modifiedCount>0){
            toast.success("Success! please wait for admin Confirmation")
          }else{
            toast.success("Please!  wait for admin approval")
          }
      
           }catch(err){
            console.log(err);
            toast.error(err.message)
            
           }
    }

    return (
        <div>
          <Helmet>
        <title>Shadow Tourist || Request To Admin</title>
      </Helmet>
             <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">Request to Admin</h3>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Please read all the terms & conditions before becoming a Guide.</p>
          </div>
          <hr className="my-8" />
          <form onSubmit={handleForm}>
            
            <div className="flex justify-around">
              <button
                type="submit"
                className="btn bg-green-400"
              >
                Continue
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default RequestToAdmin;