import "./styles.sass"
import ProfilePic from "../../images/profile.png"

import { ConnectedLines } from "../../components/AnimatedBackgrounds"

export const Home = () => {
    return (
        <>
            <main>
                <ConnectedLines />
                <div className="bg-animation">
                    <div className="texts">
                        <p>Olá, me chamo <strong>Vitor Rita!</strong></p>
                        <p>Segundo texto aqui</p>
                    </div>
                    <img alt="Vitor Rita" src={ProfilePic}></img>
                </div>
            </main>
        </>
    )
}