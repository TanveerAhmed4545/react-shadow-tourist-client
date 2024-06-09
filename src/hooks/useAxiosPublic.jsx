import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://react-shadow-tourist-server.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;