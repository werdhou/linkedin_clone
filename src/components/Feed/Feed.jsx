import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import { InputOption } from './InputOption';
import Post from '../Post/Post';

import './Feed.scss'
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

const Feed = () => {
    return (
        <div className="feed"> 
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={Subscriptions} color="red" />
                    <InputOption title="Event" Icon={EventNote} color="#c0c8cd" />
                    <InputOption title="Write article" Icon={CalendarViewDay} color="#7fc15e" />

                </div>
            </div>
            <Post />
        </div>
    )
}

export default Feed
