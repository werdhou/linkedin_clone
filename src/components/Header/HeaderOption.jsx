import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/usersReducer'

import './HeaderOption.scss'

const HeaderOption = ({avatar, Icon, title, onClick}) => {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className="headerOption__icon" src={user && user.photoUrl}/>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
