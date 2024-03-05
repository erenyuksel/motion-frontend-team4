import "./styles.scss";
import "./_postslayout.scss";
import "./_postsbase.scss";
import searchIcon from "../../assets/svgs/search_icon.svg";
import userPhoto1 from "../../assets/images/users/jennifer.png";
import sendButton from "../../assets/svgs/send_button.svg";
import moreIcon from "../../assets/svgs/menu.svg";
import feedPics1 from "../../assets/images/feedPics/image1.png";
import feedPics2 from "../../assets/images/feedPics/image2.png";
import feedPics3 from "../../assets/images/feedPics/image3.png";
import feedPics4 from "../../assets/images/feedPics/image4.png";
import likeIcon from "../../assets/svgs/heart.svg";
import shareIcon from "../../assets/svgs/share.svg";
import userPhoto2 from "../../assets/images/users/alber.png";
import userPhoto3 from "../../assets/images/users/leticia.png";
import userPhoto4 from "../../assets/images/users/patricia.png";
import largePhoto from "../../assets/images/feedPics/large_image.png";
const Posts = () => {
  return (
    <>
      <div className="search">
        <div className="container">
          <div className="search_box">
            <img src={searchIcon} alt=""></img>
            <input
              type="text"
              className="search__input"
              placeholder="Search posts..."
            ></input>
          </div>
          <div className="nav"></div>
          <ul>
            <li className="list active">liked</li>
            <li className="list">friends</li>
            <li className="list">follow</li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="status">
                <img
                  src={userPhoto1}
                  alt="User Photo"
                  className="user-photo"
                ></img>
                <input
                  type="text"
                  placeholder="What`s on your mind Jennifer?"
                ></input>
                <div className="send_button">
                  <img src={sendButton} alt="send button icon"></img>
                </div>
              </div>
              <div className="posts">
                <div className="post_details">
                  <div className="user_details">
                    <img
                      src={userPhoto1}
                      alt="User Photo"
                      className="user-photo"
                    ></img>
                    <div className="username_time">
                      <p>Jennifer Smith</p>
                      <p>Just now</p>
                    </div>
                  </div>
                  <div className="more">
                    <img
                      src={moreIcon}
                      alt="more icon"
                      className="more-icon"
                    ></img>
                  </div>
                </div>

                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, vim ut quas volumus probatus,
                    has tantas laudem iracundia et, ad per utamur ceteros
                    apeirian…
                  </p>
                </div>
                <div className="pictures">
                  <div className="pictures__item">
                    <img src={feedPics1} alt="img1"></img>
                  </div>
                  <div className="pictures__item">
                    <img src={feedPics2} alt="img2"></img>
                  </div>
                  <div className="pictures__item">
                    <img src={feedPics3} alt="img3"></img>
                  </div>
                  <div className="pictures__item">
                    <img src={feedPics4} alt="img4"></img>
                  </div>
                </div>
                <div className="social_media">
                  <div className="social_media__buttons">
                    <div className="like">
                      <img src={likeIcon} alt="like icon"></img>
                      <p>Like</p>
                    </div>
                    <div className="share">
                      <img src={shareIcon} alt="share icon"></img>
                      <p>Share</p>
                    </div>
                  </div>
                  <div className="social_media__likes">
                    <p>2 Likes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="friends">
                <div className="friends__details">
                  <img src={userPhoto4} alt="patricia"></img>
                  <div className="username_time">
                    <p>Patricia Jindal</p>
                    <p>6h ago</p>
                  </div>
                </div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, vim ut quas volumus probatus,
                    has tantas laudem iracundia et, ad per utamur ceteros
                    apeirian…
                  </p>
                </div>
                <div className="social_media">
                  <div className="social_media__buttons">
                    <div className="like">
                      <img src={likeIcon} alt="like icon"></img>
                      <p>Like</p>
                    </div>
                    <div className="share">
                      <img src={searchIcon} alt="share icon"></img>
                      <p>Share</p>
                    </div>
                  </div>
                  <div className="social_media__likes">
                    <p>2 likes</p>
                  </div>
                </div>
              </div>

              <div className="shares">
                <div className="shares__userinfo">
                  <div className="user_details">
                    <img src={userPhoto2} alt="albert"></img>
                    <div className="username_time">
                      <p>Albert Lawrence</p>
                      <p>June 20</p>
                    </div>
                    <p>Shared a post</p>
                  </div>
                  <div className="paragraph">
                    <p>
                      Lorem ipsum dolor sit amet, vim ut quas volumus probatus,
                      has tantas laudem iracundia et, ad per utamur ceteros
                      apeirian…
                    </p>
                  </div>
                  <div className="shared_posts">
                    <div className="user_details">
                      <img src={userPhoto3} alt="albert"></img>
                      <div className="username_time">
                        <p>Leticia Suárez</p>
                        <p>June 19</p>
                      </div>
                    </div>
                    <div className="paragraph">
                      <p>
                        Lorem ipsum dolor sit amet, vim ut quas volumus
                        probatus, has tantas laudem iracundia et, ad per utamur
                        ceteros apeirian…
                      </p>
                    </div>
                    <img src={largePhoto} alt="photo"></img>
                  </div>
                  <div className="social_media">
                    <div className="social_media__buttons">
                      <div className="like">
                        <img src={likeIcon} alt="like icon"></img>
                        <p>Like</p>
                      </div>
                      <div className="share">
                        <img src={searchIcon} alt="share icon"></img>
                        <p>Share</p>
                      </div>
                    </div>
                    <div className="social_media__likes">
                      <p>20 likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
