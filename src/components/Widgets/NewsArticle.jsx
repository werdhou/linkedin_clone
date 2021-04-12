import { FiberManualRecord } from '@material-ui/icons'
import React from 'react'

const NewsArticle = ({ heading, subtitle }) => {
    return (
        <div className="widgets__article">
            <div className="widgets__article_left">
                <FiberManualRecord />
            </div>
            <div className="widgets__article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
}

export default NewsArticle
