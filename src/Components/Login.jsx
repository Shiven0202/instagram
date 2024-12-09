import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Appstore from '../assets/Appstore.png';
import PlayStore from '../assets/PlayStore.png';
import Fb from '../assets/Fb.png';
import './LoginPage.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = () => {
    if (username === 'heyy.shiven' && password === '1234') {
      setIsLoggedIn(true);
      navigate('/home'); // Redirect to the home page
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to handle sign up navigation
  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <>
      <div className="Login-Container">
        <div className="Box-1">
          <div className="Box-2">
            {/* Logo with a link to the home page */}
            <a href="/">
              <img src={Logo} className="instagram" alt="Logo" />
            </a>
          </div>

          {/* Username input field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password input field */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login button */}
          <div className="Login-button-box">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>

          {/* Divider with "Or" text */}
          <div className="line-box">
            <div className="line-1"></div>
            <div className="or">Or</div>
            <div className="line-2"></div>
          </div>

          {/* Facebook login */}
          <div className="Login-with-Facebook">
            <a href="https://www.facebook.com/login">
              <img src={Fb} alt="Facebook" className="facebook" />
              <span className="Login-Facebook">Login with Facebook</span>
            </a>
          </div>

          {/* Forgot password link */}
          <div className="forgot-Password">
            <p className="Password-Forgot">Forgotten your password?</p>
          </div>
        </div>
      </div>

      {/* Sign-up button */}
      <div className="Sign-up-button">
        <button className="sign-up-button" onClick={handleSignUp}>
          <span>Don't have an account? </span>Sign up
        </button>
      </div>

      {/* App download links */}
      <div className="get-app-box">
        <p>Get the app</p>
      </div>
      <div className="app-store-google-play-box">
        <a href="https://appstoreconnect.apple.com/login">
          <img src={Appstore} alt="App Store" className="app-store" />
        </a>
        <a href="https://play.google.com/store">
          <img src={PlayStore} alt="Google Play" className="play-store" />
        </a>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Jobs</a>
          <a href="/">Help</a>
          <a href="/">API</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Locations</a>
          <a href="/">Instagram Lite</a>
          <a href="/">Threads</a>
          <a href="/">Contact uploading and non-users</a>
          <a href="/">Meta Verified</a>
          <a href="/">English (UK)</a>
        </div>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </>
  );
};

export default Login;
