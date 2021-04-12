import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

import './Widgets.scss'
import NewsArticle from './NewsArticle';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <NewsArticle heading="This is a good news for you" subtitle="Top news - 9999 readers"/>
            <NewsArticle heading="News about coronavirus" subtitle="Top news - 999 readers"/>
            <NewsArticle heading="Sport News" subtitle="Top news - 991 readers"/>
            <NewsArticle heading="Биткоин просел в цене на 10%" subtitle="Crypto news - 1233 readers"/>
            <NewsArticle heading="Tesla hits new highs" subtitle="Cars and auto - 100 readers"/>
            <NewsArticle heading="Рубль снова упал" subtitle="Finance news - 1121 readers"/>
        </div>
    )
}

export default Widgets
