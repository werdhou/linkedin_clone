import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/usersReducer'

import './Login.scss'
import logo from '../../assets/img/LinkedIn-Logo.wine.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error.message))
    }

    const register = () => {
        if (!name) {
            return alert("Please enter your name")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: picture
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: picture
                        }))
                    })
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <img
                src={logo} alt="logo" />

            <form action="">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text" />
                <input value={picture} onChange={e => setPicture(e.target.value)} placeholder="Profile pic URL" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>
            <p>Not a member?</p> {" "}
            <span className="login__register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login
