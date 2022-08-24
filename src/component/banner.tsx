import style from '../css/banner.module.css';

const Banner = () => {
    return(
        <div className={style.banner}>
            <div className={style.bannerColor} />
            <div className={style.bannerGradent} />
            <div className={style.introBox}>
                <h4 className={style.mainText}>Apple 생활에 편리함을 더하다.</h4>
                <p className={style.subText}>당신의 소중한 순간을 Apple과 함께하세요.</p>
                <hr className={style.bannerLine} /><br/><br/>
                <p className={style.introItem}>iPhone / iPad / Mac / Watch</p>
                <button className={style.getProductBtn}>상품 보러가기</button>
            </div>
        </div>
    )
}

export default Banner;