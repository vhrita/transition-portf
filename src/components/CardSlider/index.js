import "./styles.sass"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faCircleArrowUp, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import { isMobile } from "react-device-detect"

export const CardSlider = ({ cards }) => {
    const [ position, setPosition ] = useState(0)
    const [ imgIndex, setImgIndex ] = useState(-1)
    
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

    useEffect(() => {
        setTimeout(() => {
            const card = document.querySelectorAll('.card')[position]
            const images = card.querySelectorAll('img')

            if(imgIndex+1<images.length) {
                if(imgIndex<0) {
                    images[images.length-1].classList.remove('active');
                    images[images.length-1].classList.add('inactive');
                    images[0].classList.remove('inactive');
                    images[0].classList.add('active');
                } else {
                    images[imgIndex].classList.remove('active');
                    images[imgIndex].classList.add('inactive');
                    images[imgIndex+1].classList.remove('inactive');
                    images[imgIndex+1].classList.add('active');
                }
                setImgIndex(imgIndex+1)
            } else {
                setImgIndex(-1)
            }
        }, 3000)
    }, [position, imgIndex])


    const handleOpenClose = (index, open) => {
        let card = document.querySelectorAll('.card')[index]
        card.classList.remove(open ? 'closed' : 'opened')
        card.classList.add(open ? 'opened' : 'closed')
    }

    return (
        <div {...swipeHandler} className="slider-deck">
            {
                cards.map((card, index) => {
                    return <motion.div
                        className='card'
                        key={card.id}
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
                        {card.images.map((image, i) => {
                            return <motion.img 
                                className={`${i===0 ? 'active' : undefined}`}
                                key={image.id}
                                src={image.url}
                                alt={card.title+" DEMO "+i}
                            />
                        }, index)}
                        <div className='closed'>
                            <button value={index} onClick={(e) => handleOpenClose(e.value, true)}>
                                <FontAwesomeIcon icon={faCircleArrowUp} />
                            </button>
                            <button value={index} onClick={(e) => handleClose(e.value, false)}>
                                <FontAwesomeIcon icon={faCircleArrowDown} />
                            </button>
                            <p>{card.title}</p>
                            <p>{card.description}</p>
                            {card.techs.map((tech) => {
                                <button>{tech}</button>
                            })}
                        </div>
                    </motion.div>
                })
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