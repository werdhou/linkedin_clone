import CreateIcon from '@material-ui/icons/Create';
import React, { useEffect, useState } from 'react'
import { InputOption } from './InputOption';
import Post from '../Post/Post';
import { db } from '../../firebase/firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'


import './Feed.scss'
import ImageIcon from '@material-ui/icons/Image';
// import avatar from '../../assets/img/avatart.jpg'
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

const Feed = ({ name, email, userAvatar }) => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    console.log(posts)

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            })
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            name: name,
            description: email,
            message: input,
            photoUrl: userAvatar,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={Subscriptions} color="red" />
                    <InputOption title="Event" Icon={EventNote} color="#c0c8cd" />
                    <InputOption title="Write article" Icon={CalendarViewDay} color="#7fc15e" />

                </div>
            </div>
            <FlipMove>
                {posts && posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
