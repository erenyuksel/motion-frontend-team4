import "./styles.scss";
import sendButton from "../../assets/svgs/send_button.svg"

const CreateNewPost = () => {
  
  
    return (
    <>
      <div className="create-post-container">
        <div className="header-post-container">
          <img src="" alt="Avatar Logo" />
          <input type="text" />
        </div>
        <div className="footer-post-container">
            <div className="send-button-circle">
            <img src={sendButton} alt="send Button" />
            </div>
        </div> 
      </div>
    </>
  );
};

export default CreateNewPost;
