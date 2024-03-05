import "./styles.scss";
const Profile = () => {
  return (
    <>
      <div className="page_container">
        <div className="picture"></div>
        <div className="profile_container">
          <div className="profile_all_data">
            <div className="profile">
              <div className="profile_avatar">Avatar</div>
              <div className="profile_name">Vytautas Urbelis</div>
              <div className="profile_location">Basel, Switzerland</div>
              <div className="edit_profile">EDIT PROFILE</div>
            </div>
            <div className="profile_data">
              <div className="rest_profile_data">
                <div className="about_email_phone">
                  <div className="profile_about">Abount:</div>
                  <div className="email_phone">
                    <div className="profile_email">Email:</div>
                    <div className="profile_phone">Phone:</div>
                  </div>
                </div>
                <div className="things_i_like">Things I like:</div>
              </div>
              <div className="numbers">
                <div className="profile_posts">
                  <div className="number">34</div>
                  <div className="number_name">Posts</div>
                </div>
                <div className="profile_likes">
                  <div className="number">256</div>
                  <div className="number_name">Likes</div>
                </div>
                <div className="profile_friends">
                  <div className="number">98</div>
                  <div className="number_name">Friends</div>
                </div>
                <div className="profile_followers">
                  <div className="number">129</div>
                  <div className="number_name">Followers</div>
                </div>
                <div className="profile_following">
                  <div className="number">154</div>
                  <div className="number_name">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
