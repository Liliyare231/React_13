import React from 'react'
import '../header/header.css'
import { Link } from 'react-router-dom'
import logo from '../header/img/logo.png'
import like from '../header/img/rew.png'
import bin from '../header/img/bin.png'
import search from '../header/img/search.png'

import Modalka from '../Modalka/Modalka'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="menu">
                        <img src={logo} alt="search" className='logo' />
                        <div className="line"></div>
                        <Link to="/" className="menuItem">главная</Link>
                        <Link to="/catalog" className="menuItem">каталог</Link>
                        <div className="line"></div>
                        <Link to="/user" className="menuItem">Пользователи</Link>
                        <Link to="/create" className="menuItem">Добавить</Link>
                        
                    </div>
                    <div className="headerBtn">
                        <img src={search} alt="search" className="imgBtn" />
                        <img src={bin} alt="search" className="imgBtn" />
                        <img src={like} alt="search" className="imgBtn" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header