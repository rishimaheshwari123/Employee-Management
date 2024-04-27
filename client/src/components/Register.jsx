import axios from "axios";
import { useDispatch } from "react-redux";
import { registerEmp } from "../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register-emp",
        { name, email, password }
      );
      dispatch(registerEmp(response.data));
      toast(response.data.message);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-auto bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className=" d-flex justify-content-between align-items-center  gap-3 ">
            <button type="submit" className="btn btn-success btn-sm">
              Register
            </button>
            <Link className=" text-decoration-none " to="/">
              Already have an account! Please login.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
