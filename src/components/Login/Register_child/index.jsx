import "./styles.scss";
import emailLogo from '../../../assets/svgs/email.svg'
const SignUp = (props) => {
  return (
    <div className="register-container">
      <div className="old-account-holder">
        <p>Already have an account?</p>
        <button
          onClick={() => {
            props.setLogChild("login");
          }}
        >
          SIGN IN
        </button>
      </div>
      <div className="form-content">
        <label>Sign up</label>
        <div>
          {props.error && <div className="error">{props.error}</div>}
          <div className="input_div">
            <div className="email_logo"><img src={emailLogo} alt="" /></div>
            <input
              className="input_email"
              value={props.email}
              onChange={(e) => {
                props.setEmail(e.target.value);
              }}
              type="text"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="sign-in">
          <button className="button_signup" onClick={props.submitEmailForm}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
