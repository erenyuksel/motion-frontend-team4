import { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import AxiosUser from "../../axios/UserAxios";
import UserPosts from "./UserPosts";
import UserLikes from "./UserLikes";
import UserFriends from "./UserFriends";
import UserFollowers from "./UserFollowers";
import UserFollowing from "./UserFollowing";

const ProfileComponent = ({ avatar, user }) => {
  const [bottom, setBottom] = useState("posts");


  const [visitingUser, setVisitingUser] = useState(user);
  const token = useSelector((state) => state.user.token);
  const LogedInUser = useSelector((state) => state.user.user);



  const follow = async () => {
    const response = await AxiosUser.post(
      `/social/followers/toggle-follow/${visitingUser.id}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setVisitingUser(response.data);
  };

  const sendFriendRequest = async () => {
    const response = await AxiosUser.post(
      `/social/friends/request/${visitingUser.id}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setVisitingUser(response.data.receiver);
  };



  return (
    <div className="page_container">
      <div className="picture"></div>
      <div className="profile_container">
        <div className="profile_all_data">
          <div className="profile">
              <div className="profile_avatar">
                <img src={avatar} alt="" />
              </div>{" "}
            <div className="profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="profile_location">{user.location}</div>
            {LogedInUser.id === user.id ? (
              <div className="profile_button">EDIT PROFILE</div>
            ) : (
              <div>
                {visitingUser.logged_in_user_is_following ? (
                  <div onClick={follow} className="profile_button">
                    FOLLOWING
                  </div>
                ) : (
                  <div onClick={follow} className="profile_button">
                    FOLLOW
                  </div>
                )}

                {visitingUser.logged_in_user_is_friends ? (
                  <div className="profile_button_disabled">FRIEND</div>
                ) : !visitingUser.logged_in_user_is_friends && !visitingUser.logged_in_user_sent_fr ? (
                  <div onClick={sendFriendRequest} className="profile_button">
                    ADD FRIEND
                  </div>
                ) : visitingUser.logged_in_user_is_rejected ? (
                  <div className="profile_button_disabled">REJECTED</div>
                ) : visitingUser.logged_in_user_sent_fr ? (
                    <div className="profile_button_disabled">REQUEST SENT</div>
                ) : <div></div>}
              </div>
            )}
          </div>
          <div className="profile_data">
            <div className="rest_profile_data">
              <div className="about_email_phone">
                <div className="profile_about">
                  <div className="column_name">About:</div>
                  {user.about_me}
                </div>
                <div className="email_phone">
                  <div className="profile_email">
                    <div className="column_name">Email:</div>

                    {user.email}
                  </div>
                  <div className="profile_phone">
                    <div className="column_name">Phone:</div>

                    {user.phone_number}
                  </div>
                </div>
              </div>
              <div className="things_i_like">
                <div className="column_name">Things I like:</div>
                <div className="liked_things">
                  {user.things_user_likes.map((item) => (
                    <div className="thing" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="numbers">
              <div
                onClick={() => {
                  setBottom("posts");
                }}
                className="profile_posts prof_button"
              >
                <div className="number">{user.amount_of_posts}</div>
                <div className="number_name">Posts</div>
              </div>
              <div
                onClick={() => {
                  setBottom("likes");
                }}
                className="profile_likes prof_button"
              >
                <div className="number">{user.amount_of_likes}</div>
                <div className="number_name">Likes</div>
              </div>
              <div
                onClick={() => {
                  setBottom("friends");
                }}
                className="profile_friends prof_button"
              >
                <div className="number">{user.amount_of_friends}</div>
                <div className="number_name">Friends</div>
              </div>
              <div
                onClick={() => {
                  setBottom("followers");
                }}
                className="profile_followers prof_button"
              >
                <div className="number">{user.amount_of_followers}</div>
                <div className="number_name">Followers</div>
              </div>
              <div
                onClick={() => {
                  setBottom("following");
                }}
                className="profile_following prof_button"
              >
                <div className="number">{user.amount_following}</div>
                <div className="number_name">Following</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {bottom === "posts" ? (
            <div className="bottom_container"><UserPosts user={user} token={token}/></div>
          ) : bottom === "likes" ? (
            <div className="bottom_container"><UserLikes user={user} token={token}/></div>
          ) : bottom === "friends" ? (
            <div className="bottom_container"><UserFriends user={user} token={token}/></div>
          ) : bottom === "followers" ? (
            <div className="bottom_container"><UserFollowers user={user} token={token}/></div>
          ) : bottom === "following" ? (
            <div className="bottom_container"><UserFollowing user={user} token={token}/></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
