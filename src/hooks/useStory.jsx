import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useStory = () => {
    const axiosPublic = useAxiosPublic();
    const {data: stories = [], isLoading} = useQuery({
        queryKey: ['stories'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/story');
            return res.data;
        }
    })


    return [stories,isLoading]
};

export default useStory;