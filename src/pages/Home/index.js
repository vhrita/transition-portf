import "./styles.sass"
import ProfilePic from "../../images/profile.png"

import { ConnectedLines } from "../../components/AnimatedBackgrounds"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

const children = {
    hidden: {opacity: 0},
    show: { opacity: 1 }
}

export const Home = () => {
    return (
        <>
            <motion.main
                initial={{y: '+100vh'}}
                animate={{y: 0}}
                transition={{type: 'spring', duration: 1, bounce: 0, delayChildren: 1}}
            >
                <ConnectedLines />
                <motion.div
                    className="contents"
                    transition={{delayChildren: 1}}
                >
                    <div className="top">
                        <motion.div 
                            className="texts"
                            variants={children}
                            initial='hidden'
                            animate='show'
                            transition={{delay: 1, duration: 1.5}}
                        >
                            <p>Olá, me chamo <strong>Vitor Rita!</strong></p>
                            <p>Segundo texto aqui</p>
                        </motion.div>
                        <motion.button
                            variants={children}
                            initial='hidden'
                            animate='show'
                            transition={{delay: 1.5, duration: 1.5}}
                        >
                            COMECE POR AQUI
                            <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
                        </motion.button>
                    </div>
                    <div className="bottom">
                        <motion.img
                            alt="Vitor Rita"
                            src={ProfilePic}
                            variants={children}
                            initial='hidden'
                            animate='show'
                            transition={{delay: 0.5, duration: 1.5}}
                        />
                    </div>
                </motion.div>
            </motion.main>
        </>
    )
}