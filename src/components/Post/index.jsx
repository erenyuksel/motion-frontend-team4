import { useEffect, useState } from "react";
import moreIcon from "../../assets/svgs/menu.svg";
import likeIcon from "../../assets/svgs/heart.svg";
import shareIcon from "../../assets/svgs/share.svg";
import defaultAvatar from "../../assets/svgs/avatar.svg";
import { Link } from "react-router-dom";
import "./styles.scss";

const PostCard = (props) => {
  useEffect(() => {
    timeAgo();
  });

  const [showMoreImages, setShowMoreImages] = useState(false);
  const [time, setTime] = useState("");

  function timeAgo() {
    const date = new Date(props.post.created);
    const now = new Date();
    const secondsAgo = Math.round((now - date) / 1000);
    const minutesAgo = Math.round(secondsAgo / 60);
    const hoursAgo = Math.round(minutesAgo / 60);
    const daysAgo = Math.round(hoursAgo / 24);
    const weeksAgo = Math.round(daysAgo / 7);
    const monthsAgo = Math.round(daysAgo / 30);
    const yearsAgo = Math.round(daysAgo / 365);

    console.log("printing", daysAgo);

    if (secondsAgo < 60) {
      setTime("just now");
    } else if (minutesAgo < 60) {
      setTime(`${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`);
    } else if (hoursAgo < 24) {
      setTime(`${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`);
    } else if (daysAgo < 7) {
      setTime(`${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`);
    } else if (weeksAgo < 5) {
      setTime(`${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`);
    } else if (monthsAgo < 12) {
      setTime(`${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`);
    } else {
      setTime(`${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`);
    }
  }

  const handleShowMoreImages = () => {
    setShowMoreImages(true);
  };
  return (
    <div className="post" key={props.post.id}>
      <div className="post-header">
        <div className="user-photo">
          <Link to={`/friend-profile/${props.post.user.id}`}>
            <img
              src={
                props.post.user.avatar ? props.post.user.avatar : defaultAvatar
              }
              alt="User"
            />
          </Link>
          <div className="user-name">
            <p>
              {props.post.user.first_name} {props.post.user.last_name}
            </p>
            <p className="time">{time}</p>
          </div>
        </div>

        <div className="more">
          {/* More icon */}
          <img src={moreIcon} alt="More" />
        </div>
      </div>

      <div className="paragraph">
        <p>{props.post.content}</p>
      </div>
      <div className="pictures">
        {props.post.images &&
          props.post.images
            .slice(0, 3)
            .map((image, index) => (
              <img key={index} src={image.image} alt={image.alt} />
            ))}
        {props.post.images &&
          props.post.images.length > 4 &&
          !showMoreImages && (
            <div className="stacked-images" onClick={handleShowMoreImages}>
              <span
                className="stacked-images-background"
                style={{
                  backgroundImage: `url(${props.post.images[4].image})`,
                }}
              >
                +{props.post.images.length - 3} more
                {/* <img
                  src={props.post.images[3].image}
                  alt={props.post.images[3].image}
                /> */}
              </span>
            </div>
          )}
        {showMoreImages &&
          props.post.images
            .slice(4)
            .map((image, index) => (
              <img key={index} src={image.image} alt={image.alt} />
            ))}
      </div>
      <div className="footer">
        <div className="like-share">
          <div className="like-button">
            {/* Like button */}
            <img src={likeIcon} alt="Like" />
            <p className="like-button-text">Like</p>
          </div>
          <div className="share">
            <img src={shareIcon} alt="Share" />
            <p className="share-button-text">Share</p>
          </div>
        </div>

        <div className="social-media-likes">
          {/* Likes count */}
          <p>{props.post.amount_of_likes} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
