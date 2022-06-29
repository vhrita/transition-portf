import "./styles.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"
import { NavLink } from "./components/NavLink"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const paths = [
    {
        "path" : "/",
        "name" : "Home",
        "icon": "home"
    },
    {
        "path" : "/portfolio",
        "name" : "Portfolio",
        "icon": "th-list"
    },
    {
        "path" : "/about",
        "name" : "Sobre",
        "icon": "id-card-alt"
    }
]

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [onTop, setOnTop] = useState(false)

    const location = useLocation()

    useEffect(() => {
        location.pathname === '/portfolio'
        ? setOnTop(true)
        : setOnTop(false)
    }, [location])

    if(!isMobile) {
        return (
            <motion.nav
                className={onTop ? 'dsktp-top' : 'dsktp-left'}
                initial={{
                    X: !onTop && '-50vw',
                    y: onTop && '-50vh'
                }}
                animate={{
                    x: !onTop ? 0 : undefined,
                    y: onTop ? 0 : undefined
                }}
                transition={{type: 'spring', duration: 1, bounce: 0.3}}
                style={{
                    x: onTop ? '-50%' : '50%',
                    y: !onTop ? '-50%' : '50%'
                }}
            >
                {
                    paths?.map((link) => {
                        return <NavLink key={link.path} link={link} isMobile={false}  />
                    })
                }
            </motion.nav>
        )   
    } else {
        return(
            <>
                <motion.button
                    initial={{x: '-50vw', visibility: 'hidden'}}
                    animate={{
                        visibility: isOpen ? 'hidden' : 'visible',
                        x: isOpen ? '-50vw' : '1vw'
                    }}
                    transition={{type: 'spring', duration: 1, bounce: 0.2}}
                    className='collapse-mobile'
                    onClick={() => { setIsOpen(true) }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </motion.button>
                <motion.nav
                    className="mobile"
                    initial={{visibility: 'hidden', opacity: 0}}
                    animate={{
                        visibility: isOpen ? 'visible' : 'hidden',
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{duration: 0.5, delay: isOpen ? 0 : 0.5}}
                    onClick={() => { setIsOpen(false) }}
                >
                    <motion.aside
                        initial={{x: '-50vw'}}
                        animate={{x: isOpen ? '0vw' : '-100vw'}}
                        transition={{type: 'spring', duration: 1, bounce: 0.2}}
                    >
                    {
                        paths?.map((link) => {
                            return <NavLink key={link.path} link={link} isMobile={true}  />
                        })
                    }
                    </motion.aside>
                </motion.nav>
            </>
        )
    }
}