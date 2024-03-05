import "./styles.scss";


const Verification = (props) => {

  return (
    <div className="form-container">
      <div className="right-container">
        <div className="form-header">
          <label>
            Verification
            <br />
          </label>
        </div>
        <div className="register-form">
          <form>
            <div className="form-group-code">
              <input
                type="code"
                className="form-control"
                id="setcode"
                placeholder="Validation Code"
                value={props.code}
                onChange={(e) => props.setCode(e.target.value)}
              />
            </div>
            <div className="form-group-one">
              <div className="form-group-email">
                <input
                  type="email"
                  className="form-control1"
                  id="email"
                  placeholder="Email address"
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </div>
              <div className="form-group-username">
                <input
                  type="text"
                  className="form-control2"
                  id="userName"
                  placeholder="User Name"
                  value={props.userName}
                  onChange={(e) => props.setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group-authentication">
              <div className="form-group-password">
                <input
                  type="password"
                  className="form-control3"
                  id="password"
                  placeholder="Password"
                  value={props.password}
                  onChange={(e) => props.setPassword(e.target.value)}
                />
              </div>
              <div className="form-group-passwordconfirm">
                <input
                  type="password"
                  className="form-control4"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={props.repeatPassword}
                  onChange={(e) => props.setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group-name">
              <div className="form-group-fname">
                <input
                  type="text"
                  className="form-control5"
                  id="firstName"
                  placeholder="First Name"
                  value={props.firstName}
                  onChange={(e) => props.setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group-lname">
                <input
                  type="text"
                  className="form-control6"
                  id="lastName"
                  placeholder="Last Name"
                  value={props.lastName}
                  onChange={(e) => props.setLastName(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="button-class">
          <button
            type="submit"
            className="completeButton"
            onClick={props.submitRegisterForm}
          >
            COMPLETE
          </button>
        </div>
        <div className="form-footer"></div>
      </div>
    </div>
  );
};
export default Verification;
