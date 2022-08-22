/* Header 영역 */

import { useState } from 'react';
import style from '../css/header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [sideMenuStatus, setSideMenuStatus] = useState<Boolean>(false);
    const [userMenuStatus, setUserMenuStatus] = useState<Boolean>(false);

    return(
        <header className={style.header}>
            <FontAwesomeIcon className={style.menuBars} icon={faBars} onClick={() => {setSideMenuStatus(true)}}/>
            {
                sideMenuStatus == true ? 
                <nav className={style.sideMenu}>
                    <div className={style.sideMenuHeader}>
                        <h4 className={style.sideMenuTitle}>Menu</h4>
                        <FontAwesomeIcon className={style.closeSideMenu} icon={faXmark} onClick={() => {setSideMenuStatus(false)}}/>
                    </div>
                </nav>
                :
                null
            }
            <img src="/src/asset/Apple_Logo.png" alt="Logo" className={style.logo} />
            <FontAwesomeIcon className={style.userIcon} icon={faUser} />
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