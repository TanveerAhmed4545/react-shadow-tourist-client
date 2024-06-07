import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBooking = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: booking=[],isLoading,refetch} = useQuery({
        queryKey: ['bookingEmail',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/booking/${user.email}`)
            return res.data;
        }
    })

    return {booking,isLoading,refetch}
};

export default useBooking;