import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';


function App() {
  const name = 'Alexander Pushkin'
  const email = 'pushkin@net.ru'

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar name={name} email={email} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
