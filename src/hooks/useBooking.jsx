import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useBooking = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: booking=[],isLoading,refetch} = useQuery({
        queryKey: ['bookingEmail',user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/booking/${user.email}`)
            return res.data;
        }
    })

    return {booking,isLoading,refetch}
};

export default useBooking;