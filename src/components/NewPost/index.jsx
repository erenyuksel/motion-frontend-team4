import "./styles.scss";
import sendButton from "../../assets/svgs/send_button.svg";
import { useState } from "react";
import defaultAvatar from "../../assets/svgs/avatar.svg";

const CreateNewPost = () => {
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePostSubmit = () => {
    //Logic for submit the post is missing
    console.log("Post submitted:", postText);
  };

  return (
    <>
      <div className="create-post-container">
        <div className="header-post-container">
          <img src={defaultAvatar} alt="Avatar Logo" />
          <input
            type="text"
            value={postText}
            onChange={handlePostTextChange}
            placeholder="What do you want to Share?"
          />
        </div>
        <div className="main-content">
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected file preview"
            />
          )}
        </div>
        <div className="footer-post-container">
          
        <div>
          <label className="input-image">
            <img src={defaultAvatar} alt="" />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

          <div className="send-button-circle" onClick={handlePostSubmit}>
            <img src={sendButton} alt="send Button" />
          </div>

        </div>
      </div>
    </>
  );
};

export default CreateNewPost;
