import { useEffect, useState } from "react"
import "./styles.sass"

export const MultipleImagesContainer = ({images = [], running = false}) => {
    const [count, setCount] = useState(0);
    const [run, setRun] = useState(running)

    useEffect(() => {
        if(running && run) {
            const timer = setTimeout(() => {
                count >= images.length-1 ? setCount(0)
                : setCount((value) => value+1);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [images, running, run, count])

    return (
        <div
            className="images-container"
            onMouseEnter={() => setRun(false)}
            onMouseLeave={() => setRun(true)}
        >
            <img alt="project" src={images[count]} />
        </div>
    )
}