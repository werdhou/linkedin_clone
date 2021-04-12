import React, { useEffect } from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/usersReducer';
import Login from './components/Login/Login';
import { auth } from './firebase/firebase';
import Widgets from './components/Widgets/Widgets';


import './App.scss';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const name = user && user.displayName
  const email = user && user.email
  const avatar = user && user.photoUrl

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar name={name} email={email} avatar={avatar} />
          <Feed name={name} email={email} userAvatar={avatar}  />
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
