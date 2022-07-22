import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const submitForm = () => {
    alert("Function Success")
    var data = JSON.stringify({
      "user_id": "Team3",
      "password": "QWERTY"
    });
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    alert("axios initiate")
    axios(config).then(function (response) {
        if (response.status === 200) {
          alert("api Success")
          navigate(`/dashboard`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <form>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" onClick={submitForm} className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot
      </p>
    </form>
  );
};

export default Login;
