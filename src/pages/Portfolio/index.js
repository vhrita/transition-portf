import "./styles.sass"
import { CardSlider } from "../../components/CardSlider"

export const Portfolio = () => {
    return (
        <main>
            <div className="portfolio">
                <CardSlider cards={[
                    'https://i.picsum.photos/id/985/1920/1080.jpg?hmac=dLb_5lBJW4AZhZDUXweY5WlrnscpKLtCKffaqSrF9Vw',
                    'https://i.picsum.photos/id/404/1920/1080.jpg?hmac=5ulPfhEdiQ1oAWu_mMT6A_wKqZVyLKpD7zWZmgNgNp8',
                    'https://i.picsum.photos/id/520/1920/1080.jpg?hmac=XYsU8XvBEUmWVcm-mX92ro1smqwEIiRZNCFDaNXDXj8',
                    'https://i.picsum.photos/id/570/1920/1080.jpg?hmac=GrPj9g_cV2WHQPt582h1bKvbTSRzDejP6FOf7P20Q8Y',
                    'https://i.picsum.photos/id/405/1920/1080.jpg?hmac=qXJMvqqkP1QYgTezWaA03FiDMAH9rr6E9U4LZwLVRbk'
                ]} />
            </div>
        </main>
    )
}