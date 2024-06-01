import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const SocialLogin = () => {

    
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSocialLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: 'tourist',
                status: 'Verified',

            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                toast.success("Login Successfully");
                navigate(location?.state ? location.state : '/');
                
            } )
        })
    }

    return (
        <div className="px-8 pt-6">
        <button onClick={() => handleSocialLogin(googleLogin)}  className="btn bg-blue-600 border-none text-white w-full">
           <FaGoogle></FaGoogle>
             Google
           </button>
        </div>
    );
};

export default SocialLogin;