import "./styles.scss";

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
        {props.error && <div className="error">{props.error}</div>}
        <input className="input_email"
          value={props.email}
          onChange={(e) => {
            props.setEmail(e.target.value);
          }}
          type="text"
          id="email"
          placeholder="Email"
          required
        />
        <div className="sign-in">
          <div className="email_logo"></div>
          <button className="button_signup" onClick={props.submitEmailForm}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
