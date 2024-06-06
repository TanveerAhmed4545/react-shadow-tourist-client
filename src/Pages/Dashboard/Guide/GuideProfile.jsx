import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const GuideProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
const handleGuide = async(e) =>{
  e.preventDefault();
  // Logic to handle booking
  
  const form = e.target;
  const education = form.education.value;
  const workExperience = form.work.value;
  const phone = form.phone.value;
  const skillOne = form.skillOne.value;
  const skillTwo = form.skillTwo.value;
  const skillThree = form.skillThree.value;
  const skills = [
    skillOne,
    skillTwo,
    skillThree
  ]

  const name = user?.displayName;
  const profilePicture = user?.photoURL;
  const email = user?.email;

  const guideData = {
    name,
    email,
    profilePicture,
    workExperience,
    phone,
    education,
    skills
  }

    //  console.log("click");
    //  console.table(guideData);

     const guideRes = await axiosSecure.post('/guide',guideData)
    //  console.log(guideRes.data);
     if(guideRes.data.insertedId){
         // show success popup
        
         Swal.fire({
             position: "center",
             icon: "success",
             title: "Guide Profile to Database",
             showConfirmButton: false,
             timer: 1500
           });
           form.reset();
     }else{
      toast.error("Already in Database");
      form.reset();
     }


}


  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Guide Profile</title>
      </Helmet>
      <div className="flex justify-center gap-5 items-center flex-col">
        <div className="bg-white shadow-lg rounded-md  w-full md:w-3/5 lg:w-4/5">
          <img
            alt="profile"
            src="https://i.ibb.co/bFLrQgX/simon-english-48ner-ZQCHgo-unsplash-1.jpg"
            className="w-full mb-4 object-cover rounded-t-lg h-36"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <p className="p-2 px-4 text-xs text-white bg-[#5a92e1] rounded-full">
              Guide
            </p>
            <p className="mt-2 break-all text-xl font-medium text-gray-800 ">
              User Id: {user?.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {user?.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>



      {/* form */}
        <div className=" shadow-lg rounded-md  w-full md:w-3/5 lg:w-4/5">
      <div className="p-5 lg:p-10 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl  font-bold text-center text-[#5A92E1] mb-5">
          Add Guide Profile{" "}
        </h2>
        <form
         onSubmit={handleGuide}
         >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div>
              <label className="block mb-2 font-semibold">Guide Name:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={user?.displayName|| ''} 
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Guide Email:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={user?.email|| ''} 
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Guide Image Url:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={user?.photoURL|| ''} 
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Guide Education :
              </label>
              <input
               name="education"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Guide Work Experience :
              </label>
              <input
                name="work"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone Number:</label>
              <input
                
                type="number"
                placeholder="Type here"
                name="phone"
                className="input input-bordered w-full"
                required
                
              />
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
          <div>
              <label className="block mb-2 font-semibold">
                Add Skill :
              </label>
              <input
                type="text"
                name="skillOne"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
          <div>
              <label className="block mb-2 font-semibold">
              Add Skill  :
              </label>
              <input
                type="text"
                name="skillTwo"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
          <div>
              <label className="block mb-2 font-semibold">
              Add Skill  :
              </label>
              <input
                type="text"
                name="skillThree"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 btn bg-blue-500 text-white  rounded-md hover:bg-blue-600"
          >
            Add Guide Profile
          </button>
        </form>
      </div>
      </div>

      </div>

      

    </div>
  );
};

export default GuideProfile;
