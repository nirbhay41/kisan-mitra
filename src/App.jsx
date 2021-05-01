import React, { useState, useEffect } from "react";
import "./App.scss";
import { Login } from "./components/Login/Login";
import Hero from "./components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import firebase from "firebase";
import { auth } from './fire';

const App = () => {
  //For authentication
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const signInWithGoogle = async () => {
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log(err.message);
    }
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(
              "There is no user record corresponding to this identifier"
            );
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListner = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        dispatch(login({
          uid: user.uid,
          photo: user.photoURL,
          email: user.email,
          displayName: user.displayName
        }));
      } else {
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    authListner();
  }, [dispatch]);

  //For login page UI
  return (
    <div className="App">
      {user ? (
        <Hero />
      ) : (
        <div className="main">
          <div className="login">
            <div className="container">
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                clearErrors={clearErrors}
                googleLogin={signInWithGoogle}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;