import React, { useState } from "react";
import axios from "axios";
import { addEmp } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateEmployee = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [empId, setEmpId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/employee/create-emp",
        { name, email, empId }
      );
      dispatch(addEmp(response.data));
      toast.success("Employee created successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <div className="d-flex vh-100  bg-primary  justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3 ">
        <form onSubmit={handleSubmit}>
          <h2>Add Employee</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Employee ID</label>
            <input
              type="number"
              placeholder="Enter id"
              className="form-control"
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-sm">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
