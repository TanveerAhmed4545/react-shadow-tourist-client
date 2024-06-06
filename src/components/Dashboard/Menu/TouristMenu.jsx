import { FaCodePullRequest, FaRegCalendarCheck } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { TbJewishStarFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";


const TouristMenu = () => {
    return (
        <>
           <MenuItem label={'Tourist Profile'} address={'touristProfile'} icon={FaRegUser}></MenuItem>  
           <MenuItem label={'My Booking'} address={'my-booking'} icon={FaRegCalendarCheck}></MenuItem>
           <MenuItem label={'My Wishlist'} address={'my-wishlist'} icon={TbJewishStarFilled}></MenuItem>
            <MenuItem label={'Request to Admin'} address={'request-to-admin'} icon={FaCodePullRequest}></MenuItem>
        </>
    );
};

export default TouristMenu;