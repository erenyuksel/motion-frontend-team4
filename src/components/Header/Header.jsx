import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import motionLogo from "../../assets/images/logo.png";
import postsLogo from "../../assets/images/posts_logo.png";
import friendsLogo from "../../assets/svgs/icon-friends.svg";
import notificationBellLogo from "../../assets/svgs/notification_bell.svg";
import menuLogo from "../../assets/svgs/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, userLogout } from "../../store/UserSlice/index";
import { useEffect, useState } from "react";
import defaultAvatar from "../../assets/svgs/avatar.svg";
import profileLogo from "../../assets/svgs/profile.svg";
import logoutLogo from "../../assets/svgs/logout.svg";

const Header = () => {
  useEffect(() => {
    if (!user.avatar) {
      dispatch(setAvatar(defaultAvatar));
    } else {
      dispatch(setAvatar(user.avatar));
    }
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const avatar = useSelector((state) => state.user.avatar);
  const [dropdown, setDropdown] = useState(false);

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
          <img src={avatar} alt="User Avatar" />
          <div
            className="click-area-dropdown"
            onClick={() => {
              setDropdown((current) => !current);
            }}
          >
            <img src={menuLogo} alt="Menu Logo" />
          </div>
        </div>
      </header>
      {dropdown && (
        <div className="header-dropdown">
          <Link to={"/profile"}>
            <div
              className="header-dropdown-button"
              onClick={() => {
                setDropdown((current) => !current);
              }}
            >
              <img src={profileLogo} alt="Profile Logo" />
              Profile
            </div>
          </Link>
          <div
            className="header-dropdown-button"
            onClick={() => {
              dispatch(userLogout());
            }}
          >
            <img src={logoutLogo} alt="Logout Logo" />
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
