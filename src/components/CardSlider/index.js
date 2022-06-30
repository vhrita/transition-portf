import "./styles.sass"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import { isMobile } from "react-device-detect"

export const CardSlider = ({ cards }) => {
    const [ position, setPosition ] = useState(0)
    
    const onRight = () => {
        position<cards.length-1
        ? setPosition(position+1)
        : setPosition(0)
    }
    const onLeft = () => {
        position>0
        && setPosition(position-1)
    }
    const swipeHandler = useSwipeable({
        onSwipedRight: onLeft,
        onSwipedLeft: onRight,
    })

    return (
        <div {...swipeHandler} className="slider-deck">
            {
                cards.map((url, index) => (
                    <motion.div
                        className="card"
                        key={index}
                        initial={{ scale: 0, rotation: -180 }}
                        animate={{
                            rotate: 0,
                            left: `${(index-position) * 70 + 5}vw`,
                            scale: index === position ? 1 : 0.8
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: '260',
                            damping: '20'
                        }}
                    >
                        <img src={url} alt="project" />
                    </motion.div>
                ))
            }
            {!isMobile &&
                <div className="controls">
                    <button type="button" disabled={position<=0} onClick={onLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <span>{position+1}/{cards.length}</span>
                    <button type="button" disabled={false} onClick={onRight}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            }
            
            {isMobile && <span>{position+1}/{cards.length}</span>}
        </div>
    )
}