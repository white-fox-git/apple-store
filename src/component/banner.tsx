/** Banner Page */

import style from '../css/banner.module.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
 
    let navigate = useNavigate();

    return(
        <div className={style.banner}>
            <div className={style.bannerColor} />
            <div className={style.bannerGradent} />
            <div className={style.introBox}>
                <h4 className={style.mainText}>Apple, add convenience to your life.</h4>
                <p className={style.subText}>With Apple in your precious moments.</p>
                <hr className={style.bannerLine} /><br/><br/>
                <p className={style.introItem}>iPhone / iPad / Mac / Watch / Airpods</p>
                <button className={style.getProductBtn} onClick={() => {navigate('/')}}>Go to Product</button>
            </div>
        </div>
    )
}

export default Banner;