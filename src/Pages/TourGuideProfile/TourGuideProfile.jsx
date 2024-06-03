import { NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const TourGuideProfile = () => {
  const { id } = useParams();
  //   console.log(id);
  const {user} = useAuth();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const {
    data: guideDetails = {},
    isPending: loading,
    
  } = useQuery({
    queryKey: ["guideDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/guide/${id}`);
      return res.data;
    },
  });
  //   console.log(guideDetails);

  const {
    _id,
    email,
    phone,
    education,
    skills,
    workExperience,
    profilePicture,
    name,
  } = guideDetails;


  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("click");
    const form = e.target;
    const guideId = _id;
    const userRating = form.rating.value;
    const userComment = form.comment.value;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const timestamp = new Date();

    const reviewData = {

        userName,guideId,userRating,userComment,timestamp,userPhoto
    }

    console.log(reviewData);


    try {
        const {data} =  await axiosPublic.post('/reviews', reviewData);
         if(data.insertedId){
            console.log(data);
            Swal.fire({
                title: "Success!",
                text: "Review submitted successfully",
                icon: "success",
                confirmButtonText: "Done",
              });
               // Reset the form after successful submission
              form.reset();
         }
      } catch (error) {
        console.error('Error submitting review:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to submit review',
        });
      }



   }








  if (loading || !guideDetails)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Our Guide Profile
          </h1>
        </div>
      </div>
      <div className="card rounded-md lg:card-side bg-base-100 my-5 mx-5">
        <figure>
          <img src={profilePicture} alt="Album" className="rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Education: {education}</p>
          <p>Work Experience: {workExperience}</p>
          <div>
            {skills.map((skill, idx) => (
              <button
                className="mr-3 mb-3 lg:mr-5  border-none btn rounded-full text-white bg-[#257197]"
                key={idx}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* form  */}

      <div className="p-8 bg-[#cfe2eb] my-5 lg:my-10 shadow-lg rounded-lg max-w-lg mx-auto sm:p-10 md:p-12 lg:max-w-2xl">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-6 sm:text-3xl">
          Add a Review
        </h2>
        <form
           onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Rating:
            </label>
            <input
              type="number"
              defaultValue={1}
              name="rating"
              min={1}
              max={5}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#82b2f7]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Comment:
            </label>
            <textarea
              name="comment"
              required
              className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#82b2f7]"
            />
          </div>
          <div className="text-center mt-8">
          {!user ? (
              <NavLink state={location.pathname} to="/login">
                <button
                  type="button"
                  className="bg-[#4692FF] hover:bg-[#82b2f7] text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Login to Submit Review
                </button>
              </NavLink>
            ) : (
              <button
                type="submit"
                className="bg-[#4692FF] hover:bg-[#82b2f7] text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Submit Review
              </button>
            )}
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourGuideProfile;
