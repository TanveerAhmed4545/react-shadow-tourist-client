import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEyeSlash} from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import signInAnimation from '../../assets/signInAnimation.json';
import Lottie from "lottie-react";

const Login = () => {
    const [showPassword,setShowPassword] = useState(false);
    const {signIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data);

        signIn(data.email,data.password)
        .then(result =>{
          // console.log(result.user);
          result.user &&  toast.success("Login Successfully");
          
          // navigate after login
          navigate(location.state?.from?.pathname ? location.state?.from?.pathname : '/');
         

        })
        .catch(error =>{
          // console.log(error);
          error && toast.warn("Login Error, email or password incorrect");
        })

    }

    // const handleSocialLogin = socialProvider =>{
    //   socialProvider()
    //   .then(result =>{

    //     result.user &&  toast.success("Login Successfully");
    //     // social login navigate
    //     navigate(location?.state ? location.state : '/');
    //   })
    //   .then(error =>{
    //     // console.log(error);
    //     error && toast.warn("Login Error");
    //   })
    // }


    return (
        <div className="hero min-h-screen ">
        <Helmet>
              <title>Shadow Tourist || Login</title>
          </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-0 lg:ml-10">
          <h1 className="text-4xl font-bold mb-4">Login Now</h1>
          <div className=" max-w-[500px] md:max-w-md lg:max-w-[570px]  ">
          <Lottie className="w-full" animationData={signInAnimation} loop={true} />
      </div>
    
        </div>
        <div className="card  shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        {/* <h1 className="text-4xl font-bold text-center mt-4">Login Now</h1> */}
          <form className="card-body pb-0"  onSubmit={handleSubmit(onSubmit)} >
           
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered"  
              {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="w-full relative">
              <input type={showPassword ? 'text' :"password" } placeholder="password" name="password" className="w-full input input-bordered" 
              {...register("password", { required: true })}
              />
              <span className="absolute top-4 right-2"  onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ?  <FaEyeSlash></FaEyeSlash>  : <IoMdEye></IoMdEye> 
                        }
                    </span>
              </div>
              
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#1f55cbb5] text-white">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <div className="text-center py-5">
         <p>Do not have an account ? <Link className="text-[#2563EB] font-bold" to='/register'>Register</Link></p>
         </div>
        </div>
      </div>
    </div>
    );
};

export default Login;