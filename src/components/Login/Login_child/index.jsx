import "./styles.scss";
import avatarIcon from "../../../assets/svgs/avatar.svg";
import passwordIcon from "../../../assets/svgs/password.svg";

const LoginChild = (props) => {
  return (
    <div className="col">
      <div className="login_header">
        Do not have an account?
        <button onClick={() => {props.setLogChild('register')}} value="Sign Up" className="button signup">
          Sign up
        </button>
      </div>
      <div className="content">
        <div className="content-inner">
          <h2>Sign In</h2>
          <form action="#" method="post">
            <div className="form-field">
              <img src={avatarIcon} alt="Avatar Icon" />
              <input onChange={(e) => {props.setEmail(e.target.value)}} value={props.email} required type="text" placeholder="Email" />
            </div>
            <div className="form-field">
              <img src={passwordIcon} alt="Password Icon" />
              <input onChange={(e) => {props.setPassword(e.target.value)}} value={props.password} required type="password" placeholder="Password" />
            </div>
            <button onClick={props.submitLoginForm} className="button submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginChild;
