import "./styles.sass"
import ProfilePic from "../../images/profile.png"

import { ConnectedLines } from "../../components/AnimatedBackgrounds"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import TypewriterComponent from "typewriter-effect"

import { gql, useQuery } from "@apollo/client"

import { useNavigate } from "react-router"

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
    const navigate = useNavigate()
    // const handleStart = e => {
    //     e.preventDefault()
    //     navigate('/portfolio')
    // }

    const { loading, error, data } = useQuery(GET_TEXTS_QUERY)

    if (loading) return console.log('Loading...')
    if (error) return console.log(`Error! ${error.message}`)

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
                            <TypewriterComponent
                                options={{
                                    strings: data.home.texts,
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 2000,
                                }}
                            />
                        </motion.div>
                        <motion.button
                            variants={children}
                            initial='hidden'
                            animate='show'
                            transition={{delay: 1.5, duration: 1.5}}
                            onClick={() => {navigate('/portfolio')}}
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