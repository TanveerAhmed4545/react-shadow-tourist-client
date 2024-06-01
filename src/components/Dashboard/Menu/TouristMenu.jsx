import { FaCodePullRequest } from "react-icons/fa6";
import MenuItem from "./MenuItem";


const TouristMenu = () => {
    return (
        <>
            <MenuItem label={'Request to Admin'} address={'request-to-admin'} icon={FaCodePullRequest}></MenuItem>
        </>
    );
};

export default TouristMenu;