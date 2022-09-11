import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLargeRounded, MoreVertOutlined, Search } from '@material-ui/icons';
import SideBarChat from '../SideBarChat/SideBarChat';
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <Avatar src="" />
        <div className={classes.sidebar__headerRight}>
          <IconButton>
            <DonutLargeRounded />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className={classes.sidebar__chatbox}>
        <div className={classes.sidebar__search}>
          <div className={classes.sidebar__searchContainer}>
            <Search />
            <input placeholder="Enter your text here" type="text" />
          </div>
        </div>

        <div className={classes.sidebar__chat}>
          <SideBarChat />
          <SideBarChat />
          <SideBarChat />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
