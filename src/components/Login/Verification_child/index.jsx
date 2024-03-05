import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import axios from "axios";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_repeat, setPasswordrepeat] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  //const dispatch = useDispatch();
  const axiosApi = axios.create({
    baseURL: "https://motion.propulsion-home.ch/backend/api",
  });
  const handleCompleteClick = async () => {
    event.preventDefault();
    setError(null);
    try {
      const res = await axiosApi.patch("/auth/registration/validation/", {
        email: email,
        username: username,
        code: code,
        password: password,
        password_repeat: password_repeat,
        first_name: fname,
        last_name: lname,
      });
      console.log(res);
      //   if (res.data.access) {
      //     localStorage.setItem("token", JSON.stringify(res.data.access));
      //     dispatch(login_user(res.data.access));
      //     const from = location.state?.from || "/";
      //     navigate(from);
      //   }
    } catch (error) {
      console.log("the error is caught:", error);
      setError(error);
    }
  };

  return (
    <div className="form-container">
      <div className="left-container">Motion</div>
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="form-group-one">
              <div className="form-group-email">
                <input
                  type="email"
                  className="form-control1"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group-username">
                <input
                  type="text"
                  className="form-control2"
                  id="userName"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group-passwordconfirm">
                <input
                  type="password"
                  className="form-control4"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={password_repeat}
                  onChange={(e) => setPasswordrepeat(e.target.value)}
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
                  value={fname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group-lname">
                <input
                  type="text"
                  className="form-control6"
                  id="lastName"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="button-class">
          <button
            type="submit"
            className="completeButton"
            onClick={handleCompleteClick}
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
