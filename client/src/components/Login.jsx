import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginEmp } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login-emp",
        { email, password }
      );
      dispatch(loginEmp(response.data));
      toast(response.data.message);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-auto bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" d-flex justify-content-between  align-items-center  gap-3  ">
            <button type="submit" className="btn btn-success btn-sm">
              Login
            </button>
            <Link className=" text-decoration-none " to="/register">
              Don't have account! Please register.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
