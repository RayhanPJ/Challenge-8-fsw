import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from "../../logo.svg";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("https://challenge-8-be-fsw-production.up.railway.app/api/v1/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

async function doLoginGoogle( res, email ) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("https://challenge-8-be-fsw-production.up.railway.app/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password : "",
      token : res,
    }),
  });
  const data = await response.json();
  return data.token;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const GOOGLECLIENTID = "1075166577960-qiqbp7khn8e0e50mrgf01hcci3kognqf.apps.googleusercontent.com";

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => err.message)
      .finally(() => setIsLoading(false));
  }

  const haldleSuccessGoogle = (response) => {
    const userData = jwtDecode(response.credential)
    // const response = await fetch("https://challenge-8-be-fsw-production.up.railway.app/api/v1/google"
    if (response.credential) {
      doLoginGoogle(response.credential, userData.email)
        .then((token) => {
          localStorage.setItem("token", token);
          setIsLoggedIn(token);
        })
        .catch((err) => err.message)
        .finally(() => setIsLoading(false));
    }
  };

  // function handleLogout(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   setIsLoading(false);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md">
            {!isLoggedIn ? (
              <div className="login-box">
                <h2 style={{ color: `black` }}>Welcome back</h2>
                <p>Enter your details</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <i className="bx bxs-user"></i>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <i className="bx bxs-lock"></i>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Your password"
                      required
                    />
                  </div>
                  <a href="/" className="forgot">
                    Back to the site
                  </a>
                  <br />
                  <a href="/" className="forgot">
                    Forgot your password?
                  </a>
                  <input
                    type="submit"
                    value={isLoading ? "Loading" : "Login"}
                  />
                  <br />
                  <GoogleOAuthProvider clientId={GOOGLECLIENTID}>
                    <GoogleLogin
                      buttonText="Login with Google"
                      onSuccess={(res) => {
                        haldleSuccessGoogle(res)
                      } }
                      onError={() => {
                        haldleSuccessGoogle("Error")
                      }}
                      cookiePolicy={"single_host_origin"}
                    />
                  </GoogleOAuthProvider>
                  ;
                </form>
              </div>
            ) : (
              <Navigate to="/"></Navigate>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
