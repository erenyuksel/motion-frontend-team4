import { NavLink } from "react-router-dom";
import "./styles.scss";
import motionLogo from "../../assets/images/logo.png";
import postsLogo from "../../assets/images/posts_logo.png";
import friendsLogo from "../../assets/svgs/icon-friends.svg";
import notificationBellLogo from "../../assets/svgs/notification_bell.svg";
import menuLogo from "../../assets/svgs/menu.svg";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <header className="header-container">
        <div className="header-icons-left">
          <div className="motion-logo">
            <img src={motionLogo} alt="Motion Logo" />
            <NavLink to="/feed">Motion</NavLink>
          </div>
          <div className="posts-logo">
            <img src={postsLogo} alt="Posts Logo" />
            <NavLink to="/posts">Posts</NavLink>
          </div>

          <div className="friends-logo">
            <img src={friendsLogo} alt="Find Friends Logo" />
            <NavLink to="/find-friends">Find Friends</NavLink>
          </div>
        </div>
        <div className="user-profile">
          <img src={notificationBellLogo} alt="Notification Bell Logo" />
          {user.loggedIn ? (
            <img src={user.userData.avatarUrl} alt="User Avatar" />
          ) : null}
          <img src={menuLogo} alt="Menu Logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
