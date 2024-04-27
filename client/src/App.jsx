import React from "react";
import Employees from "./components/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Employees />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
