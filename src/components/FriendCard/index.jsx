import { useState } from "react";
import "./styles.scss";
import AxiosUser from "../../axios/UserAxios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const FriendCard = ({ friend }) => {
  const [isToggled, setToggled] = useState(false);
  const [isFriend, setFriend] = useState(false);
  // const friends = useSelector((state) => state.user.friendList);
  // console.log("the friends list", friends);
  const access = useSelector((state) => state.user.token);
  const handleToggle = (id) => {
    async function fetchData(id) {
      const data = { user_id: Number(`${id}`) };
      const res = await AxiosUser.post(
        `/social/followers/toggle-follow/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    }

    fetchData(id);
  };

  const handleToggleFriend = () => {
    setFriend(!isFriend);
  };

  return (
    <>
      <div className="FriendlistCard" key={friend.id}>
        <Link to={`/friend-profile/${friend.id}`}>
          <div className="profileImg">
            <img src={friend.avatar} alt={friend.first_name} />
          </div>
        </Link>
        <div className="profileDescription">
          <h3>
            {friend.first_name} {friend.last_name}
          </h3>
          <h4>{friend.location}</h4>
        </div>
        <div className="profileFollowStatus">
          <button
            onClick={() => {
              handleToggle(friend.id);
            }}
            className={`toggle-button-fol ${isToggled ? "on" : "off"}`}
          >
            {isToggled ? "FOLLOWING" : "FOLLOW"}
          </button>
          <button
            onClick={() => {
              handleToggleFriend;
            }}
            key={friend.id}
            className={`toggle-button-frnd ${isFriend ? "on" : "off"}`}
          >
            {isFriend ? "FRIEND" : "ADD FRIEND"}
          </button>
        </div>
        <div className="profileAbout">{friend.about_me}</div>

        <div className="profileInterest">
          {friend.things_user_likes.map((item, i) => {
            return (
              <p key={i}>
                <small>{item}</small>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FriendCard;
