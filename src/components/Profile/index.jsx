import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const ProfileComponent = ({ avatar, user }) => {
  const [bottom, setBottom] = useState("posts");

  return (
    <div className="page_container">
      <div className="picture"></div>
      <div className="profile_container">
        <div className="profile_all_data">
          <div className="profile">
            <Link to='/friend-profile/794'><div className="profile_avatar">
              <img src={avatar} alt="" />
            </div> </Link>
            <div className="profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="profile_location">{user.location}</div>
            <div className="edit_profile">EDIT PROFILE</div>
          </div>
          <div className="profile_data">
            <div className="rest_profile_data">
              <div className="about_email_phone">
                <div className="profile_about">
                  About:
                  <br />
                  {user.about_me}
                </div>
                <div className="email_phone">
                  <div className="profile_email">
                    Email:
                    <br />
                    {user.email}
                  </div>
                  <div className="profile_phone">
                    Phone:
                    <br />
                    {user.phone_number}
                  </div>
                </div>
              </div>
              <div className="things_i_like">
                Things I like:
                {user.things_user_likes.map((item) => (
                  <div key={item}>{item}</div>
                ))}
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
            <div className="bottom_container">posts</div>
          ) : bottom === "likes" ? (
            <div className="bottom_container">likes</div>
          ) : bottom === "friends" ? (
            <div className="bottom_container">friends</div>
          ) : bottom === "followers" ? (
            <div className="bottom_container">followers</div>
          ) : bottom === "following" ? (
            <div className="bottom_container">following</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
