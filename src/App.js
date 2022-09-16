import React from 'react';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { ChatBox, SideBar } from './components';
import './App.css';
import axios from './axios';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/chat/sync').then((response) => {
      setMessages(response.data.data.chat);
      console.log(messages);
    });
  }, []);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('5d8569239231547b4e13', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <ChatBox messages={messages} />
      </div>
    </div>
  );
};

export default App;
