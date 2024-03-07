import React, { useState } from "react";
import moreIcon from "../../assets/svgs/menu.svg";
import likeIcon from "../../assets/svgs/heart.svg";
import shareIcon from "../../assets/svgs/share.svg";
import "./styles.scss";
const PostCard = (props) => {
  const [showMoreImages, setShowMoreImages] = useState(false);

  const handleShowMoreImages = () => {
    setShowMoreImages(true);
  };
  return (
    <div className="post" key={props.post.id}>
      <div className="post-details">
        <div className="user-details">
          <img src={props.post.user.photo} alt="User" />
          <p>{props.post.user.name}</p>
          <p>{props.post.timestamp}</p>
        </div>
        <div className="more">
          {/* More icon */}
          <img src={moreIcon} alt="More" />
        </div>
      </div>
      <div className="paragraph">
        <p>{props.post.text}</p>
      </div>
      <div className="pictures">
        {props.post.images &&
          props.post.images
            .slice(0, 4)
            .map((image, index) => (
              <img key={index} src={image.image} alt={image.alt} />
            ))}
        {props.post.images &&
          props.post.images.length > 4 &&
          !showMoreImages && (
            <div className="stacked-images" onClick={handleShowMoreImages}>
              <span>+{props.post.images.length - 4} more</span>
            </div>
          )}
        {showMoreImages &&
          props.post.images
            .slice(4)
            .map((image, index) => (
              <img key={index} src={image.image} alt={image.alt} />
            ))}
      </div>
      <div className="social-media">
        <div className="like">
          {/* Like button */}
          <img src={likeIcon} alt="Like" />
          <p>Like</p>
        </div>
        <div className="share">
          {/* Share button */}
          <img src={shareIcon} alt="Share" />
          <p>Share</p>
        </div>
        <div className="social-media-likes">
          {/* Likes count */}
          <p>{props.post.likes} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
