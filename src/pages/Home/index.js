import "./styles.sass"
import ProfilePic from "../../images/profile.png"

import { ConnectedLines } from "../../components/AnimatedBackgrounds"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

import { gql, useQuery } from "@apollo/client"

const GET_TEXTS_QUERY = gql`
    query {
        home(where: {id: "cl58igjiusvrn0ck9rf90effl"}) {
            texts
            title
            button
        }
    }
`

const children = {
    hidden: {opacity: 0},
    show: { opacity: 1 }
}

export const Home = () => {
    const { loading, error, data } = useQuery(GET_TEXTS_QUERY)

    if (loading) return console.log('Loading...');
    if (error) return console.log(`Error! ${error.message}`);

    console.log(data);

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
                            <p>{data.home.title} <strong>Vitor Rita!</strong></p>
                            <p>{data.home.texts[0]}</p>
                        </motion.div>
                        <motion.button
                            variants={children}
                            initial='hidden'
                            animate='show'
                            transition={{delay: 1.5, duration: 1.5}}
                        >
                            {data.home.button}
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