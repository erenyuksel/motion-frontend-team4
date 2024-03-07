import { useState } from "react";
import "./styles.scss";
import AxiosUser from "../../axios/UserAxios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const FriendCard = ({ friend }) => {
  const [isToggled, setToggled] = useState(false);
  const [aFriend, setFriend] = useState(false);
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
      console.log(res.data.logged_in_user_is_following);
      setToggled(res.data.logged_in_user_is_following);
    }
    fetchData(id);
  };
  const handleRequest = (id) => {
    async function sendRequest(id) {
      const res1 = await AxiosUser.post(
        `/social/friends/request/${id}/`,
        { user_id: `${id}` },
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res1.data);
    }
    sendRequest(id);
  };

  async function isFriend(fid) {
    const res = await AxiosUser.get("/social/friends/?limit=6&offset=1", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    console.log(res.data);
    if (res.data.results == []) setFriend(aFriend);
    else if (res.data.results.find((id) => id === fid)) setFriend(!aFriend);
    else setFriend(aFriend);
  }

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
          {aFriend ? (
            <button onClick={() => {}} key={friend.id}>
              FRIEND
            </button>
          ) : (
            <button
              onClick={() => {
                handleRequest(friend.id);
              }}
              key={friend.id}
            >
              ADD FRIEND
            </button>
          )}
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
