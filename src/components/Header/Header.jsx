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
import checkButton from "../../assets/images/check.png";
import cancelButton from "../../assets/svgs/cancel.svg";
import watchLaterButton from "../../assets/svgs/watch_later.svg";
import AxiosUser from "../../axios/UserAxios";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const avatar = useSelector((state) => state.user.avatar);
  const token = useSelector((state) => state.user.token);
  const [dropdown, setDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [receivers, setReceivers] = useState([]);
  const [requesters, setRequesters] = useState([]);
  const [totalNotifications, setTotalNotifications] = useState(0);

  useEffect(() => {
    if (!user.avatar) {
      dispatch(setAvatar(defaultAvatar));
    } else {
      dispatch(setAvatar(user.avatar));
    }

    //get Notification von axois to receive the requests and the sended requests. Filter to get 2 lists
    const getNotification = async () => {
      const notification = await AxiosUser.get("/social/friends/requests/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const receivedNot = notification.data.results.filter(
        (item) => item.receiver.id === user.id
      );
      const requestedNot = notification.data.results.filter(
        (item) => item.receiver.id !== user.id
      );

      setRequesters(requestedNot);
      setReceivers(receivedNot);
      setTotalNotifications(receivedNot.length + requestedNot.length);
    };
    getNotification();
  }, []);

  // console.log("Sum of notifications", totalNotifications);
  // console.log(receivers);

  
  const handleAcceptRequest = async () => {
    await AxiosUser.post(`/social/friends/request/${user.id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const handleRejectRequest = async () => {
    await AxiosUser.delete(`/social/friends/request/${user.id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <>
      <header className="header-container">
        <div className="header-icons-left">
          <div className="motion-logo">
            <img src={motionLogo} alt="Motion logo" />
            <NavLink to="/feed">Motion</NavLink>
          </div>
          <div className="posts-logo">
            <img src={postsLogo} alt="Posts logo" />
            <NavLink to="/posts">Posts</NavLink>
          </div>

          <div className="friends-logo">
            <img src={friendsLogo} alt="Find friends logo" />
            <NavLink to="/find-friends">Find Friends</NavLink>
          </div>
        </div>
        <div className="user-profile">
          <div className="notification-container">
            <img
              src={notificationBellLogo}
              alt="Notification Bell logo"
              onClick={() => {
                setNotificationDropdown((current) => !current);
              }}
            />
            <div className="total-notification-container">
              <p>{totalNotifications}</p>
            </div>
          </div>

          <img
            src={avatar}
            alt="User Avatar"
            onClick={() => {
              setDropdown((current) => !current);
            }}
          />
          <div
            className="click-area-dropdown"
            onClick={() => {
              setDropdown((current) => !current);
            }}
          >
            <img src={menuLogo} alt="Menu logo" />
          </div>
        </div>
      </header>

      {/* Add dropdown to header icon */}
      {dropdown && (
        <div className="header-dropdown">
          <Link to={`/profile`}>
            <div
              className="header-dropdown-button"
              onClick={() => {
                setDropdown((current) => !current);
              }}
            >
              <img src={profileLogo} alt="Profile logo" />
              Profile
            </div>
          </Link>
          <div
            className="header-dropdown-button"
            onClick={() => {
              dispatch(userLogout());
              window.localStorage.removeItem("token");
            }}
          >
            <img src={logoutLogo} alt="Logout logo" />
            Logout
          </div>
        </div>
      )}

      {/* Add dropdown to navigation icon */}
      {notificationDropdown && (
        <div className="navigation-dropdown">
          {/* mapping over the receivers results to get the recieved requests */}
          <h4>Recived requests</h4>
          {receivers.map((notification) => (
            <div key={notification.id} className="recieved-request">
              <div className="show-user-request">
                <img
                  className="user-request-avatar"
                  src={defaultAvatar}
                  alt="user request avatar"
                />
                <div className="name-origin">
                  <p className="name">
                    {notification.requester.first_name}{" "}
                    {notification.requester.last_name}
                  </p>
                  <p>{notification.requester.location}</p>
                </div>
                <div className="button-container">
                  <div className="check-button-container">
                    <img
                      className="check-button"
                      src={checkButton}
                      alt="check button logo"
                      onClick={() => {
                        handleAcceptRequest(notification.requester.id);
                      }}
                    />
                  </div>
                  <div className="cancel-button-container">
                    <img
                      className="cancel-button"
                      src={cancelButton}
                      alt="cancel button logo"
                      onClick={() => {
                        handleRejectRequest(notification.requester.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Send request with styling from recived request except the watch later logo */}
          <h4>Sent requests</h4>
          {requesters.map((notification) => (
            <div key={notification.id} className="recieved-request">
              <div className="show-user-request">
                <img
                  className="user-request-avatar"
                  src={defaultAvatar}
                  alt="user request avatar"
                />
                <div className="name-origin">
                  <p className="name">
                    {notification.receiver.first_name}{" "}
                    {notification.receiver.last_name}
                  </p>
                  <p>{notification.receiver.location}</p>
                </div>
                <div className="watch-button-container">
                  <div className="cancel-button-container">
                    <img
                      className="cancel-button"
                      src={watchLaterButton}
                      alt="watch later logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
