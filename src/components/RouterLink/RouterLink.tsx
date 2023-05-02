import {FC} from "react";
import { Link } from "react-router-dom";


interface RouterLinkProps {
    to: string,
    text: string,

}


const RouterLink:FC<RouterLinkProps> = ({to, text}) => {
    return(
        <Link to={to}>
            {text}
        </Link>
    )
}
export default RouterLink;
