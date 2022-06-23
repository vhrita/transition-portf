import "./styles.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faThList, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

export const SideBar = () => {
    if(isMobile) {
        return (
            <motion.nav
                className="desktop"
                initial={{x: '-50vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 1, bounce: 0.2}}
                style={{y: '-50%'}}
            >
                <Link to={'/'} className="nav-link">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </Link>
                <Link to={'/portfolio'} className="nav-link">
                    <FontAwesomeIcon icon={faThList} />
                    <span>Portfolio</span>
                </Link>
                <Link to={'/about'} className="nav-link">
                    <FontAwesomeIcon icon={faIdCardAlt} />
                    <span>Sobre</span>
                </Link>
            </motion.nav>
        )   
    } else {
        return(
            <motion.nav className="mobile">
                <motion.aside>
                    <Link to={'/'} className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                    <hr />
                    <Link to={'/portfolio'} className="nav-link">
                        <FontAwesomeIcon icon={faThList} />
                        <span>Portfolio</span>
                    </Link>
                    <hr />
                    <Link to={'/about'} className="nav-link">
                        <FontAwesomeIcon icon={faIdCardAlt} />
                        <span>Sobre</span>
                    </Link>
                    <hr />
                </motion.aside>
            </motion.nav>
        )
    }
}