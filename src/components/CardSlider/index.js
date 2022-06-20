import "./styles.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const CardSlider = () => {
    return (
        <div className="slider-deck">
            <FontAwesomeIcon icon={faChevronLeft} className="deck-btn" />
            <div className="secondary"></div>
            <div className="main"></div>
            <div className="secondary"></div>
            <FontAwesomeIcon icon={faChevronRight} className="deck-btn" />
        </div>
    )
}