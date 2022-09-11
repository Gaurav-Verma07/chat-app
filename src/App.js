import React from 'react';
import { ChatBox, SideBar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
