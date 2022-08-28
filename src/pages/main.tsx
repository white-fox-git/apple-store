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
                <section className={style.Mac}>
                    <video src ="/introMac.mp4" autoPlay className={style.introMac} muted></video>
                    <div className={style.textBox}>
                        <h4 className={style.titleText}>MacBook Air</h4>
                        <h2 className={style.powerText}>Power. It's in the Air</h2>
                        <span className={style.explanationText}>
                            MacBook Air with M1 is an outstandingly portable laptop — it's nimble and quick, 
                            with a silent, fanless design and a beautiful Retina display. Thanks to its slim 
                            profile and all-day battery life, this Air moves at the speed of lightness.
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
                <section className={style.iPhone13_Pro}>
                    <div className={style.iPhone13_Intro}>      
                        <div className={style.textBox}>
                            <h4 className={style.titleText}>iPhone13 Pro</h4>
                            <h2 className={style.powerText}>More Powerful Processer</h2>
                            <span className={style.explanationText}>
                                A dramatically more powerful camera system. 
                                A display so responsive, every interaction feels new again. 
                                The world's fastest smartphone chip. Exceptional durability. 
                                And a huge leap in battery life.
                                Lets Pro.
                            </span>
                        </div>
                        <div className={style.priceBox2}>
                            <span className={style.price}>From £949</span>
                            <span className={style.price}>|</span>
                            <Link to="" className={`${style.price} ${style.priceLink}`}>Wathc the product →</Link>
                        </div>
                    </div>
                    <img src="/iPhone13_Pro.jpg" className={style.iPhoneImg}/>
                </section>
            </main>
            <footer className={style.footer}>
                <p>Made by White Fox</p>
            </footer>
        </>
    )
}

export default Main;