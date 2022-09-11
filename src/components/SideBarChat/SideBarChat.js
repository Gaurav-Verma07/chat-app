import { Avatar } from '@material-ui/core';
import classes from './SideBarChat.module.css';
const SideBarChat = () => {
  return (
    <div className={classes.sidebarchat}>
      <Avatar />
      <div className={classes.sidebarchat__text}>
        <h3>Happy</h3>
        <p>That's great </p>
      </div>
    </div>
  );
};
export default SideBarChat;
