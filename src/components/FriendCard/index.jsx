import { useState } from "react";
import "./styles.scss";
import AxiosUser from "../../axios/UserAxios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import check from "../../assets/images/check.png";
export const FriendCard = ({
  friend,
  handleToggle,
  handleRequest,
  setCheck,
}) => {
  const [isFollow, setFollow] = useState(false);
  //const [isToggled, setToggled] = useState(false);
  const [aFriend, setFriend] = useState(false);
  const access = useSelector((state) => state.user.token);
  const userResponse = useSelector((state) => state.user.user);

  async function isFollower(fid) {
    const res = await AxiosUser.post(`/users/${fid}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    console.log(res.data);
    if (res.data.logged_in_user_is_following) setFollow(!isFollow);
    else setFollow(isFollow);
  }
  // async function findFriend(fid) {
  //   const res = await AxiosUser.get("/users/?limit=100&offset=1", {
  //     headers: {
  //       Authorization: `Bearer ${access}`,
  //     },
  //   });
  //   console.log(res.data);
  //    (res.data.results.filter((results) => first_name);
  //   else if (res.data.results.find((id) => id === fid)) setFriend(!aFriend);
  //   else setFriend(aFriend);
  // }

  return (
    <>
      <div className="main-friend-conatiner">
        <div className="FriendlistCard" key={friend.id}>
          <Link to={`/friend-profile/${friend.id}`}>
            {friend.avatar ? (
              <div className="profileImg">
                <img src={friend.avatar} alt={friend.first_name} />
              </div>
            ) : (
              <div className="profileImg1">
                <img alt={friend.first_name[0]} />
              </div>
            )}
          </Link>
          <div className="profileDescription">
            <h3>
              {friend.first_name} {friend.last_name}
            </h3>
            {friend.location ? <p>{friend.location}</p> : <p>&nbsp;</p>}
          </div>
          <div className="profileFollowStatus">
            {friend.logged_in_user_is_following ? (
              <button
                onClick={() => {
                  handleToggle(friend.id);
                  setCheck((current) => !current);
                }}
                className={`toggle-button-fol ${friend.logged_in_user_is_following ? "on" : "off"}`}
              >
                FOLLOWING
              </button>
            ) : (
              <button
                onClick={() => {
                  handleToggle(friend.id);
                  setCheck((current) => !current);
                }}
                className={`toggle-button-frnd ${friend.logged_in_user_is_friends ? "on" : "off"}`}
              >
                FOLLOW
              </button>
            )}
            {friend.logged_in_user_is_friends ? (
              <button
                key={friend.id}
                className={`toggle-button-frnd ${friend.logged_in_user_is_friends ? "on" : "off"}`}
              >
                FRIEND
              </button>
            ) : !friend.logged_in_user_is_friends &&
              !friend.logged_in_user_is_rejected ? (
              <button
                onClick={() => {
                  handleRequest(friend.id);
                  setCheck((current) => !current);
                }}
                key={friend.id}
                className={`toggle-button-frnd ${friend.logged_in_user_is_friends ? "on" : "off"}`}
              >
                ADD FRIEND
              </button>
            ) : !friend.logged_in_user_is_friends &&
              friend.logged_in_user_is_rejected ? (
              <button
                onClick={() => {
                  handleRequest(friend.id);
                  setCheck((current) => !current);
                }}
                key={friend.id}
                className={`toggle-button-frnd ${friend.logged_in_user_is_friends ? "on" : "off"}`}
              >
                REJECTED
              </button>
            ) : friend.logged_in_user_sent_fr ? (
              <button
                key={friend.id}
                className={`toggle-button-frnd ${friend.logged_in_user_is_friends ? "on" : "off"}`}
              >
                REQUEST SENT
              </button>
            ) : null}
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
      </div>
    </>
  );
};

export default FriendCard;
