import { FaRegUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { MdAssignmentAdd } from "react-icons/md";


const GuideMenu = () => {
    return (
        <>
           <MenuItem label={'Guide Profile'} address={'guideProfile'} icon={FaRegUser}></MenuItem>  
           <MenuItem label={'Assigned Tours'} address={'assignedTours'} icon={MdAssignmentAdd}></MenuItem>  
        </>
    );
};

export default GuideMenu;