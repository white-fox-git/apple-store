/* Header */

import { useState } from 'react';
import style from '../css/header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

    const [sideMenuStatus, setSideMenuStatus] = useState<Boolean>(false); // Mobile Screen -> Side Menu enadble, disable
    const [userMenuStatus, setUserMenuStatus] = useState<Boolean>(false); // User Menu enable, disable
    let navigate = useNavigate();

    return(
        <header className={style.header}>
            <FontAwesomeIcon className={style.menuBars} icon={faBars} onClick={() => {
                setSideMenuStatus(true);
                setUserMenuStatus(false);
            }}/>
            {
                sideMenuStatus == true ? 
                <nav className={style.sideMenu}>
                    <div className={style.sideMenuHeader}>
                        <h4 className={style.sideMenuTitle}>Menu</h4>
                        <FontAwesomeIcon className={style.closeSideMenu} icon={faXmark} onClick={() => {setSideMenuStatus(false)}}/>
                    </div>
                    <ul className={style.sideMenuList}>
                        <li><Link to="" className={style.sideMenuItem}>Store</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>Mac</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>iPad</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>iPhone</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>Watch</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>Airpods</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>TV & Home</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>Only on Apple</Link></li>
                        <li><Link to="" className={style.sideMenuItem}>Support</Link></li>
                    </ul>
                </nav>
                :
                null
            }
            <img src="/src/asset/Apple_Logo.png" alt="Logo" className={style.logo} onClick={() => {navigate('/')}}/>
            <Link to="" className={style.menuItem}>Store</Link>
            <Link to="" className={style.menuItem}>Mac</Link>
            <Link to="" className={style.menuItem}>iPad</Link>
            <Link to="" className={style.menuItem}>iPhone</Link>
            <Link to="" className={style.menuItem}>Watch</Link>
            <Link to="" className={style.menuItem}>Airpods</Link>
            <Link to="" className={style.menuItem}>TV & Home</Link>
            <Link to="" className={style.menuItem}>Only on Apple</Link>
            <Link to="" className={style.menuItem}>Support</Link>
            <FontAwesomeIcon className={style.userIcon} icon={faUser} onClick={() => {userMenuStatus == true ? setUserMenuStatus(false) : setUserMenuStatus(true)}}/>
            {
                userMenuStatus == true ?
                <nav className={userMenuStatus == true ? style.padeInUserMenu : style.padeOutUserMenu}>
                    
                </nav>
                :
                null
            }
        </header>
    )
}

export default Header;