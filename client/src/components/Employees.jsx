import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getEmp } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { deleteEmp } from "../redux/userSlice";
import { toast } from "react-toastify";

const Employees = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/employee/delete-emp/${id}`
      );

      dispatch(deleteEmp({ id }));
      toast.success("Employee deleted successfully!");
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/employee/get-emp"
      );
      dispatch(getEmp(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="d-flex vh-100  bg-primary  justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3 ">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +{" "}
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Employee ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.empId}</td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-danger btn btn-sm "
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
