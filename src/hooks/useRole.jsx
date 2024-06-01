import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useRole = () => {
    const {user,loading} = useAuth();
    const axiosPublic = useAxiosPublic();

   const {data: role='', isLoading} =useQuery({
       queryKey: ['role',user?.email],
       enabled: !loading && !!user?.email,
       queryFn: async()=>{
        const {data} = await axiosPublic.get(`/user-role/${user?.email}`)
        return data.role
       } 
    })
    

    // fetch user info using logged in user info 

    return [role,isLoading];
};

export default useRole;