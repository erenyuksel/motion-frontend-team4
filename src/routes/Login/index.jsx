import LoginChild from "../../components/Login/Login_child";
import ConfirmationChild from "../../components/Login/Confirmation_child";
import "./styles.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AxiosUser from "../../axios/UserAxios";
import { userLogin } from "../../store/UserSlice";
import SignUp from "../../components/Login/Register_child";
import Spinner from "../../components/Spinner";

const Login = () => {
  useEffect(() => {
    isLogedin && navigate("/feed");
  }, []);

  // Hooks to interact with the Redux store and React Router
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to manage form inputs and UI elements
  const [email, setEmail] = useState("nopek61472@mcuma.com");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("django");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // State to toggle between login and registration forms
  const [logChild, setLogChild] = useState("login");

  // Selector to check if user is already logged in
  const isLogedin = useSelector((state) => state.user.token);

  // Clears all form fields
  function clearForm() {
    setEmail("");
    setUserName("");
    setPassword("");
    setRepeatPassword("");
    setFirstName("");
    setLastName("");
    setCode("");
  }

  // Handles login form submission
  async function submitLoginForm(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await AxiosUser.post("/auth/token/", {
        email: email,
        password: password,
      });
      const token = res.data.access;
      navigate("/feed");
      dispatch(userLogin(token));
      window.localStorage.setItem("token", token);
    } catch (errors) {
      setError(errors.response.data.detail);
    } finally {
      setIsLoading(false);
    }
  }

  // Handles registration form submission
  async function submitRegisterForm(e) {
    e.preventDefault();
    setError("");
    try {
      setIsLoading(true);
      await AxiosUser.patch("/auth/registration/validation/", {
        email,
        username: userName,
        code,
        password,
        password_repeat: repeatPassword,
        first_name: firstName,
        last_name: lastName,
      });

      setLogChild("login");
      navigate("/login");
    } catch (errors) {
      setError(errors.response.data.detail);
    } finally {
      setIsLoading(false);
    }
  }

  // Handles email form submission for registration
  async function submitEmailForm(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await AxiosUser.post("/auth/registration/", { email: email });
      setLogChild("confirm");
    } catch (errors) {
      setError(errors.response.data.email);
    } finally {
      setIsLoading(false);
    }
  }

  // Render loading spinner when loading

  return (
    <div className="login_main_container">
      <div className="login_left_container">
        <div className="login_logo">
          <img src="./src/assets/images/logo_white.png" alt="Motion" />
        </div>
        <div className="login_motion">Motion</div>
        <div className="login_about">
          <p>Conect with friends and the world around you with Motion</p>
        </div>
        <div className="app_store_buttons">
          <div className="store_button">
            <img src="./src/assets/svgs/apple.svg" alt="Apple" />
          </div>
          <div className="store_button">
            <img src="./src/assets/svgs/google.svg" alt="Google" />
          </div>
        </div>
        <div className="links">
          <div className="social_links">
            <img src="./src/assets/svgs/twitter_icon.svg" alt="Motion" />
          </div>
          <div className="social_links">
            <img src="./src/assets/svgs/instagram_icon.svg" alt="Motion" />
          </div>
          <div className="social_links">
            <img src="./src/assets/svgs/facebook_icon.svg" alt="Motion" />
          </div>
        </div>
        <div className="rights_reserved">
          @ Motion 2018. All rights reserved
        </div>
      </div>
      <div className="login_right_container">
     {isLoading ? <Spinner />: 
          logChild === "login" ? (
            <LoginChild
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              submitLoginForm={submitLoginForm}
              error={error}
              setLogChild={setLogChild}
              clearForm={clearForm}
            />
          ) : logChild === "register" ? (
            <SignUp
              email={email}
              setEmail={setEmail}
              submitEmailForm={submitEmailForm}
              error={error}
              setLogChild={setLogChild}
              clearForm={clearForm}
            />
          ) : logChild === "confirm" ? (
            <ConfirmationChild 
            email={email}
            setLogChild={setLogChild}/>
          ) : (
            <div></div>
          )
          // case 'veryfication':
          //     return <VeryficationChild email={email}
          //   userName={userName}
          //   code={code}
          //   password={password}
          //   repeatPassword={repeatPassword}
          //   firstName={firstName}
          //   lastName={lastName}
          //   setEmail={setEmail}
          //   setUserName={setUserName}
          //   setCode={setCode}
          //   setPassword={setPassword}
          //   setRepeatPassword={setRepeatPassword}
          //   setFirstName={setFirstName}
          //   setLastName={setLastName}
          //   submitRegisterForm={submitRegisterForm}
          //   error={error}
          //   setLogReg={setLogReg}
          //   clearForm={clearForm}
          //   />
        }
      </div>
    </div>
  );
} 
;

export default Login;
