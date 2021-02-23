import React from "react";
import loginImg from "../../resources/login_page_pic.svg";

export const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    clearErrors,
  } = props;

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            />
          </div>
          <p className="errorMsg">{emailError}</p>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            />
          </div>
          <p className="errorMsg">{passwordError}</p>
        </div>
      </div>
      <div className="footer">
        {hasAccount ? (
          <>
            <button className="btn" onClick={handleLogin}>
              Sign In
            </button>
            <p>
              Don't have an account ?
              <span onClick={() => {
                  clearErrors();
                  setHasAccount(!hasAccount);
                }}
              > Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <button className="btn" onClick={handleSignup}>
              Sign Up
            </button>
            <p>
              Have an account ?
              <span onClick={() => {
                clearErrors();
                setHasAccount(!hasAccount);
                }}> Sign In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
