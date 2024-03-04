import "./styles.scss";
import avatarIcon from "../../../assets/svgs/avatar.svg";
import passwordIcon from "../../../assets/svgs/password.svg";

const LoginChild = () => {
  return (
    <div className="col">
      <div className="header">
        Do not have an account?
        <button href="#" value="Sign Up" className="button signup">
          Sign up
        </button>
      </div>
      <div className="content">
        <div className="content-inner">
          <h2>Sign In</h2>
          <form action="#" method="post">
            <div className="form-field">
              <img src={avatarIcon} alt="Avatar Icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-field">
              <img src={passwordIcon} alt="Password Icon" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign In" className="button submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginChild;
