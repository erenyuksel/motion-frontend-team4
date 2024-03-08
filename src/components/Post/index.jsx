import { useState } from "react";
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
      <div className="post-header">
        <div className="user-photo">
          <img src={props.post.user.avatar} alt="User" />

          <div className="user-name">
            <p>
              {props.post.user.first_name} {props.post.user.last_name}
            </p>
            <p className="time">{props.post.created}</p>
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
