import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import API_ENDPOINTS from "../../api";
import Header from '../Header'
import "./AdminLogin.css";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [testing, setTesting] = useState(false);
  const [password, setPassword] = useState("Soakify@Admin4u");
  const [tfa, setTfa] = useState(false);
  const { id, setId, email, setEmail, authenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      navigate("dashboard");
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 3500);
    }
  }, [error]);

  const loginUser = async (email, password) => {
    if (testing) {
      setId(-1);
      setError(null);
      setAuthenticated(true);
      navigate("dashboard");
    } else {

      try {
        const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });

        console.log("Login Response", response.data);
        console.log("Login Resp", response);

        setId(response.data.id);

        if (response.data.id) {

          setError(null);

          const tfaStatus = response.data.tfaEnabled;
          setTfa(tfaStatus);

          if (tfaStatus) {
            navigate("tfa");
          } else {
            setAuthenticated(true);
            navigate("dashboard");
          }
        }
      } catch (error) {
        console.error("Error Status Code: ", error.request.status);
        if (error.request.status === 0)
          setError('Server Error - Please contact CS team.');

        if (error.request.status === 401)
          setError("Invalid login/password!")
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="admin-login-container">
      <Header />
      {!authenticated ? (
        <div className="login-box">
          <h2>Admin Login <button onClick={() => setTesting(!testing)}>{+testing}</button></h2>

          {error ? <p className="login-error">{error}</p> : null}
          {!tfa ? (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={testing? 'testing@mail.com': email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={testing? '12345':password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          ) : (
            <Outlet />
          )}
          <Link to="/home">Back to Home</Link>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};