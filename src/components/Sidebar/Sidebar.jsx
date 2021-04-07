import React from 'react'

import avatar from '../../assets/img/avatart.jpg'

import './Sidebar.scss'
import { Avatar } from '@material-ui/core'
import background from '../../assets/img/background.jpg'
import RecentItem from './RecentItem'

const Sidebar = ({ name, email }) => {

    

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={background} alt="background_image" />
                <Avatar src={avatar} />
                <h2>{name}</h2>
                <h4>{email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statNumber">9999</div>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <div className="sidebar__statNumber">9999</div>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                <RecentItem topic={"reactjs"}/>
                <RecentItem topic={"javascript"}/>
                <RecentItem topic={"coding"}/>
                <RecentItem topic={"git"}/>
                <RecentItem topic={"vscode"}/>
                <RecentItem topic={"redux"}/>
                <RecentItem topic={"developer"}/>
            </div>
        </div>
    )
}

export default Sidebar
