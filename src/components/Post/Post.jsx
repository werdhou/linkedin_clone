import { Avatar } from '@material-ui/core'
import React from 'react'

import './Post.scss'

const Post = ({name, description, message, photoUrl}) => {
    return (
        <div className="post"> 
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Alexander Pushkin</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                <p>Message goes here</p>
            </div>
        </div>
    )
}

export default Post
