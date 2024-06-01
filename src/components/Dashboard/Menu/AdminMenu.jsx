import { FaRegUser, FaUsers } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";


const AdminMenu = () => {
    return (
        <>
           {/* Profile Menu */}
           <MenuItem label={'Profile'} address={'admin-profile'} icon={FaRegUser}></MenuItem> 
           {/* Add Package */}
           <MenuItem label={'Add Package'} address={'add-package'} icon={BsFillHouseAddFill}></MenuItem>
           {/* Manage user */}
           <MenuItem label={'Manage Users'} address={'manage-users'} icon={FaUsers}></MenuItem>
        </>
    );
};

export default AdminMenu;