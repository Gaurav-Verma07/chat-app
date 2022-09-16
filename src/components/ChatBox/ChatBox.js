import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import axios from '../../axios';
import { useState } from 'react';
import classes from './ChatBox.module.css';

const ChatBox = ({ messages }) => {
  const [input, setInput] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('/chat/new', {
      message: input,
      name: 'HAppyr',
      timeStamp: Date.now(),
      received: true,
    });
    setInput('');
  };

  return (
    <div className={classes.chatbox}>
      <div className={classes.chatbox__header}>
        <Avatar />
        <div className={classes.chatbox__info}>
          <h3>My Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className={classes.chatbox__tools}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={classes.chat__body}>
        {messages.map((message) => (
          <p className={`${classes.chat__message} ${message.received && classes.chat__receiver}`}>
            <span className={classes.chat__name}>{message.name}</span>
            <span>{message.message}</span>
            <span className={classes.chat__timestamp}>{new Date(message.timeStamp).toUTCString()}</span>
          </p>
        ))}
      </div>
      <div className={classes.chat__footer}>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button type="submit" onClick={formSubmitHandler}>
            Send a message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};
export default ChatBox;
