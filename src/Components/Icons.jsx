import { AiOutlineReload } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const Icons = ({icon}) =>{

    switch (icon) {

        case "Circle":
                    return <MdOutlineRadioButtonUnchecked className="cir-icon"/>;

        case "Cross":
                        return <HiX className="cross-icon"/>;

        case "reload":
                return <AiOutlineReload className="reload-icon"/>;
    
        default:
    }
}

export default Icons;