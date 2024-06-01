import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";


const Login = () => {
    const [showPassword,setShowPassword] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }


    return (
        <div className="hero min-h-screen ">
        <Helmet>
              <title>Shadow Tourist || Login</title>
          </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-0 lg:ml-10">
          <h1 className="text-4xl font-bold mb-4">Login Now</h1>
          <div className=" max-w-[500px] md:max-w-md lg:max-w-[570px]  ">
        
      </div>
    
        </div>
        <div className="card  shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        {/* <h1 className="text-4xl font-bold text-center mt-4">Login Now</h1> */}
          <form className="card-body pb-0"  onSubmit={handleLogin} >
           
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered"  
            //   {...register("email", { required: true })}
              />
              {/* {errors.email && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>} */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="w-full relative">
              <input type={showPassword ? 'text' :"password" } placeholder="password" name="password" className="w-full input input-bordered" 
            //   {...register("password", { required: true })}
              />
              <span className="absolute top-4 right-2"  onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ?  <FaEyeSlash></FaEyeSlash>  : <IoMdEye></IoMdEye> 
                        }
                    </span>
              </div>
              
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#85A1FF] text-white">Login</button>
            </div>
          </form>
          <div className="px-8 pt-6">
         {/* <button onClick={() => handleSocialLogin(googleLogin)} className="btn bg-blue-600 border-none text-white w-full">
            <FaGoogle></FaGoogle>
              Google
            </button> */}
         </div>
          <div className="text-center py-5">
         <p>Do not have an account ? <Link className="text-black font-bold" to='/register'>Register</Link></p>
         </div>
        </div>
      </div>
    </div>
    );
};

export default Login;