import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TourGuideCard = ({guide}) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name,profilePicture,phone,education} = guide;
  return (
    <div>
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          // eslint-disable-next-line react/prop-types
          src={profilePicture}
          alt=""
          className="object-cover object-center  w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase ">
           Phone Number : {phone}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
          Name:   {name}
          </h2>
        </div>
        <p className="dark:text-gray-800 ">
          {education}
        </p>
        <Link to={`/guide-Profile/${_id}`}>
        <button className="btn my-2 w-full text-white bg-[#59A1E5]">View Profile</button>

        </Link>
        
      </div>
    </div>
  );
};

export default TourGuideCard;
