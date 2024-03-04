import "../../../routes/Login/styles.scss";

const ConfirmationChild = ({ email }) => {
  return (
    <div>
      <h1>Congratulations!</h1>
      <img src="./src/assets/svgs/check_circle_black.svg" alt="check circle" />
      <p>
        `We have send a confirmation code to your email`
        <br /> {email}
      </p>
      <button className="button">CONTINUE</button>
    </div>
  );
};

export default ConfirmationChild;
