import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TouristProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleStory = async (e) => {
    e.preventDefault();

    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const title = form.title.value;
    const story = form.story.value;
    const name = user?.displayName;
    const profilePicture = user?.photoURL;
    const email = user?.email;
    const timestamp = new Date();

    const storyData = {
      imageUrl,
      title,
      story,
      name,
      profilePicture,
      email,
      timestamp,
    };

    console.table(storyData);

    const storyRes = await axiosSecure.post("/story", storyData);
    //  console.log(storyRes.data);
    if (storyRes.data.insertedId) {
      // show success popup

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Story Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    } else {
      toast.error("Error");
      form.reset();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Tourist Profile</title>
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
              Tourist
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
              Add Story{" "}
            </h2>
            <form onSubmit={handleStory}>
              <div className="grid grid-cols-1  gap-5">
                <div>
                  <label className="block mb-2 font-semibold">
                    Tourist Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    value={user?.displayName || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Tourist Email:
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    value={user?.email || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Tourist Image Url:
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    value={user?.photoURL || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Story Image Url :
                  </label>
                  <input
                    name="imageUrl"
                    type="text"
                    placeholder="Type your story image url"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Story Title :
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Type your story title"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Write Your Story:
                  </label>
                  <textarea
                    name="story"
                    placeholder="Type your story here"
                    className="textarea textarea-bordered w-full"
                    rows="6"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 btn w-full bg-blue-500 text-white  rounded-md hover:bg-blue-600"
              >
                Add Your Story
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristProfile;
