import { useDispatch, useState } from "react-dom";
import "./styles.scss";

const SignUp = () => {
  //const [email, setEmail] = useState("");
  //   const [error, setError] = useState("");

  //   const dispatch = useDispatch();
  function handleSubmit() {}
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setError(null);

  //     try {
  //       const res = await MotionApi.post("/auth/registration/", {
  //         email: email,
  //       });
  //     if(res.data.success)
  //         const from = location.state?.from || "";
  //         navigate(from);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  return (
    <div className="register-container">
      <div className="logo-container"></div>
      <div className="signup-container">
        <div className="old-account-holder">
          <p>Already have an account?</p>
          <button onClick={""}>SIGN IN</button>
        </div>
        <div className="form-content">
          <form>

            <label>Sign up</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              //onChange={(e) => setEmail(e.target.value)}
            />
            <div className="sign-in">
              <button id="signIn" onClick={handleSubmit()}>
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
