/* Header 영역 */

import { useState } from 'react';
import style from '../css/header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
            <img src="/src/asset/Apple_Logo.png" alt="Logo" className={style.logo}/>
        </header>
    )
}

export default Header;