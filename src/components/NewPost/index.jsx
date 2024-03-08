import "./styles.scss";
import sendButton from "../../assets/svgs/send_button.svg";
import { useState } from "react";
import addPhotoIcon from "../../assets/svgs/add_photo.svg";
import { useSelector } from "react-redux";
import AxiosUser from "../../axios/UserAxios";

const CreateNewPost = () => {
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const avatar = useSelector((state) => state.user.avatar);
  const token = useSelector((state) => state.user.token);

  const handleImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePostSubmit = async () => {
    let formData = new FormData();
  formData.append("images", selectedFile);
  formData.append("content", postText);

    try {
      await AxiosUser.post(`/social/posts/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("An error occured:", error.message);
    }
  };

  return (
    <>
      <div className="create-post-container">
        <div className="header-main-container">
          <div className="header-post-container">
            <img src={avatar} alt="Avatar" />
            <textarea
              className="input-post"
              type="text"
              value={postText}
              onChange={(e) => {
                setPostText(e.target.value);
              }}
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
        </div>
        <div className="footer-post-container">
          <div>
            <label className="input-image">
              <img src={addPhotoIcon} alt="Add Photo Icon" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
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
