import "./styles.scss";

const ConfirmationChild = (props) => {
  return (
    <div className="confirmation_container">
      <h1>Congratulations!</h1>
      <img className="sucsess" src="./src/assets/svgs/check_circle_black.svg" alt="check circle" />
      <p>
        We have send a confirmation code to your email
        <br /> {props.email}
      </p>
      <button
        onClick={() => {
          props.setLogChild("veryfication");
        }}
        className="button_continue"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default ConfirmationChild;
