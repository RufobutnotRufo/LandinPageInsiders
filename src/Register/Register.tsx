import "./Register.scss";
import closeWindowsSvg from "./x-circle.svg";

const Register: React.FC = () => {
  return (
    <div className="elems">
      <div className="register-field">
        <div className="register-text">
          <h1 className="register-text-inner">Sign In</h1>
          <button className="register-text-inner-btn">
            <img src={closeWindowsSvg} alt="Close" />
          </button>
        </div>

        <div className="form">
          <label className="name" htmlFor="full-name">
            Full Name
          </label>
          <input
            id="full-name"
            className="full-name-input"
            placeholder="Name Surname"
          />

          <label className="password-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="password-input"
            type="password"
            placeholder="Enter your password"
          />

          <label className="email-label" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            className="email-input"
            type="email"
            placeholder="Mail"
          />

          <label className="phone-label" htmlFor="phone">
            Your Phone
          </label>
          <input
            id="phone"
            className="phone-input"
            type="tel"
            placeholder="Your phone number"
          />

          <div className="private-policy-check">
            <input
              id="private-policy"
              className="private-policy-checkbox"
              type="checkbox"
            />
            <label htmlFor="private-policy">
              Yes, I agree to the private policy
            </label>
          </div>

          <div className="sign-in">
            <button className="sign-in-btn">Sign In</button>
          </div>

          <div className="have-an-account">
            <p>Already have an account?</p>
            <button className="log-in">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
