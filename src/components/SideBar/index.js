import "./styles.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faThList, faIdCardAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

const paths = [
    {
        "path" : "/",
        "name" : "Home",
        "icon": faHome
    },
    {
        "path" : "/portfolio",
        "name" : "Portfolio",
        "icon": faThList
    },
    {
        "path" : "/about",
        "name" : "Sobre",
        "icon": faIdCardAlt
    }
]

const LinkConstructor = (link) => {
        return (
            <>
                <Link to={link.path} className="nav-link">
                    <FontAwesomeIcon icon={link.icon} />
                    <span>{link.name}</span>
                </Link>  
                {!isMobile && <hr />}
            </>
        )
}

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
                {
                    paths.map((link) => {
                        return <linkConstructor link={link} key={link.path}  />
                    })
                }
            </motion.nav>
        )   
    } else {
        return(
            <>
                <motion.button
                    initial={{x: '-50vw'}}
                    animate={{x: '1vw'}}
                    transition={{type: 'spring', duration: 1, bounce: 0.2}}
                    className='collapse-mobile'
                >
                    <FontAwesomeIcon icon={faBars} />
                </motion.button>
                <motion.nav
                    className="mobile"
                    initial={{visibility: 'hidden', opacity: 0}}
                >
                    <motion.aside>
                    {
                        paths.map((link) => {
                            return <linkConstructor link={link} key={link.path}  />
                        })
                    }
                    </motion.aside>
                </motion.nav>
            </>
        )
    }
}