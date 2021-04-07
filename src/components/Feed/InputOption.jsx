import React from 'react'

import './InputOption.scss'

export const InputOption = ({ title, Icon, color }) => {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}
