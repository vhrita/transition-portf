import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavLink = (props) => {
    return (
        <>
            <Link to={props.link.path} className="nav-link">
                <FontAwesomeIcon icon={props.link.icon} />
                <span>{props.link.name}</span>
            </Link>  
            {props.isMobile && <hr />}
        </>
    )
}