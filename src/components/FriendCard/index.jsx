import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

export const FriendCard = () => {
  const [isToggled, setToggled] = useState(false);
  const [isFriend, setFriend] = useState(false);
  //const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   const res = axiosApi.get("/users/?limit=6&offset=1");
  //   console.log(res);
  //   setFriends(res.data.results);
  // }, [friends]);
  // const axiosApi = axios.create({
  //   baseURL: "https://motion.propulsion-home.ch/backend/api",
  // });
  const handleToggle = () => {
    setToggled(!isToggled);
  };
  const handleToggleFriend = () => {
    setFriend(!isFriend);
  };

  return (
    <div className="FriendlistCard">
      <div className="profileImg">
        <img src="/src/assets/images/users/alber.png" alt="Alber"></img>
      </div>
      <div className="profileDescription">
        <h3>Albert Lawrence</h3>
        <h4>Zurich,Switzerland</h4>
      </div>
      <div className="profileFollowStatus">
        <button
          onClick={handleToggle}
          className={`toggle-button-fol ${isToggled ? "on" : "off"}`}
        >
          {isToggled ? "FOLLOWING" : "FOLLOW"}
        </button>
        <button
          onClick={handleToggleFriend}
          className={`toggle-button-frnd ${isFriend ? "on" : "off"}`}
        >
          {isFriend ? "FRIEND" : "ADD FRIEND"}
        </button>
      </div>
      <div className="profileAbout">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        vehicula ante. Ut et pulvinar dolor. Donec non varius nisi.
      </div>
      <div className="profileInterest">
        <p>
          <small>Cooking</small>
        </p>
        <p>
          <small>Cooking</small>
        </p>
        <p>
          <small>Swimming</small>
        </p>
      </div>
    </div>
  );
};
