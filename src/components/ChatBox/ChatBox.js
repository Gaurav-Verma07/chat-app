import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import clsx from 'clsx';
import classes from './ChatBox.module.css';

const ChatBox = () => {
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
        <p className={classes.chat__message}>
          <span className={classes.chat__name}>Happy</span>
          <span>This is the message</span>
          <span className={classes.chat__timestamp}>{new Date().toUTCString()}</span>
        </p>
        <p className={clsx(classes.chat__message, classes.chat__receiver)}>
          <span className={classes.chat__name}>Happy</span>
          <span>This is the message</span>
          <span className={classes.chat__timestamp}>{new Date().toUTCString()}</span>
        </p>
        <p className={classes.chat__message}>
          <span className={classes.chat__name}>Happy</span>
          <span>This is the message</span>
          <span className={classes.chat__timestamp}>{new Date().toUTCString()}</span>
        </p>
        <p className={clsx(classes.chat__message, classes.chat__receiver)}>
          <span className={classes.chat__name}>Happy</span>
          <span>This is the message</span>
          <span className={classes.chat__timestamp}>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className={classes.chat__footer}>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};
export default ChatBox;
