/* Apple Home Main Page */

import style from '../css/main.module.css';
import Header from '../component/header';
import Banner from '../component/banner';
import {Link} from 'react-router-dom';

const Main = () => {
    return(
        <>
            <Header />
            <Banner />
            <main className={style.main}>
                <section className={style.mainItem}>
                    <video src ="/introMac.mp4" autoPlay className={style.introMac} muted></video>
                    <div className={style.textBox}>
                        <h4 className={style.titleText}>MacBook Air</h4>
                        <h2 className={style.powerText}>Power. It's in the Air</h2>
                        <span className={style.explanationText}>
                            MacBook Air with M1 is an outstandingly portable laptop — it's nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all-day battery life, this Air moves at the speed of lightness.
                        </span>
                    </div>
                    <div className={style.M1Intro}>
                        <img src="./M1_Icon.jpg" className={style.M1Icon} />
                        <h4 className={style.M1IntroText}>Supercharged by the Apple M1 chip</h4>
                    </div>
                    <div className={style.priceBox}>
                        <span className={style.price}>From £999</span>
                        <span className={style.price}>|</span>
                        <Link to="" className={`${style.price} ${style.priceLink}`}>Wathc the product →</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;