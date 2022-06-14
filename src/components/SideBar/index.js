import "./styles.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faThList, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const SideBar = () => {
    return (
        <>
            <motion.nav
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
        </>
    )
}