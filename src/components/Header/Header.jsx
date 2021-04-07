import React from 'react'
import HeaderOption from './HeaderOption';


import './Header.scss'

import LinkedinIcon from '../../assets/img/linkedin.svg';
import Avatar from '../../assets/img/avatart.jpg'
import SearchIcon from '@material-ui/icons/Search';
import { Home, Message, NotificationImportant, SupervisorAccount, Work } from '@material-ui/icons';


function Header() {
    const titles = ['Home', 'My Network', 'Jobs', 'Messaging', 'Notification']
    const icons = [Home, SupervisorAccount, Work, Message, NotificationImportant]

    return (
        <div className="header">

            <div className="header__left">
                <img src={LinkedinIcon} alt="linkedin" />

                <div className="header__search">
                    {/* searchicon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                {
                    titles.map((title, idx )=> (
                        <HeaderOption key={title+idx} title={title} Icon={icons[idx]} />
                    ))
                }
                <HeaderOption avatar={Avatar} title="me"/>

            </div>
        </div>
    )
}

export default Header
