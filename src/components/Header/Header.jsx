import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import motionLogo from "../../assets/images/logo.png";
import postsLogo from "../../assets/images/posts_logo.png";
import friendsLogo from "../../assets/svgs/icon-friends.svg";
import notificationBellLogo from "../../assets/svgs/notification_bell.svg";
import menuLogo from "../../assets/svgs/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, userLogout } from "../../store/UserSlice/index";
import { useEffect, useState, useRef } from "react";
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
  const [updateNotification, setUpdateNotification] = useState(false);

  //Click outside to close the menu dropdown
  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //Click outside to close the notification popup
  let menuRefNot = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRefNot.current && !menuRefNot.current.contains(e.target)) {
        setNotificationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    if (!user.avatar) {
      dispatch(setAvatar(defaultAvatar));
    } else {
      dispatch(setAvatar(user.avatar));
    }

    //get Notification von axois to receive the requests and the sended requests. Filter to get 2 lists
    const getNotification = async () => {
      try {
        const notification = await AxiosUser.get("/social/friends/requests/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const receivedNot = notification.data.results.filter(
          (item) => item.receiver.id === user.id && item.status === "P"
        );
        const requestedNot = notification.data.results.filter(
          (item) => item.receiver.id !== user.id && item.status !== "A"
        );

        setRequesters(requestedNot);
        setReceivers(receivedNot);
        setTotalNotifications(receivedNot.length + requestedNot.length);
        console.log(requestedNot);
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
    };
    getNotification();
  }, [updateNotification]);

  // console.log("Sum of notifications", totalNotifications);
  // console.log(receivers);

  const handleAcceptRequest = async (requesterId) => {
    console.log(requesterId);
    try {
      await AxiosUser.patch(
        `/social/friends/requests/${requesterId}/`,
        { status: "A" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setUpdateNotification((current) => !current);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleRejectRequest = async (requesterId) => {
    try {
      await AxiosUser.delete(`/social/friends/requests/${requesterId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUpdateNotification((current) => !current);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <>
      <header className="header-container">
        <div className="header-icons-left">
          <div className="motion-logo">
            <img src={motionLogo} alt="Motion logo" />
            Motion
            {/* <NavLink to="/feed">Motion</NavLink> */}
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
        <div className="header-dropdown" ref={menuRef}>
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
        <div className="navigation-dropdown" ref={menuRefNot}>
          {/* mapping over the receivers results to get the recieved requests */}
          <h4>Recived requests</h4>
          {receivers.map((notification) => (
            <div key={notification.id} className="recieved-request">
              <div className="show-user-request">
                <img
                  className="user-request-avatar"
                  src={notification.requester.avatar}
                  alt="user request avatar"
                />
                <div className="name-origin">
                  <p className="name">
                    {notification.requester.first_name}{" "}
                    {notification.requester.last_name}
                  </p>
                  <div className="requester-avatar">
                    {notification.requester.location
                      ? notification.requester.location
                      : defaultAvatar}
                  </div>
                </div>
                <div className="button-container">
                  <div className="check-button-container">
                    <img
                      className="check-button"
                      src={checkButton}
                      alt="check button logo"
                      onClick={() => {
                        handleAcceptRequest(notification.id);
                      }}
                    />
                  </div>
                  <div className="cancel-button-container">
                    <img
                      className="cancel-button"
                      src={cancelButton}
                      alt="cancel button logo"
                      onClick={() => {
                        handleRejectRequest(notification.id);
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
                  src={
                    notification.receiver.avatar
                      ? notification.receiver.avatar
                      : defaultAvatar
                  }
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
