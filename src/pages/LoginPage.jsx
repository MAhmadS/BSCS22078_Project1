import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const BACKEND_URL = "http://localhost:5000";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/auth/login`,
        formData
      );
      console.log("Login response:", response.data);
      alert("Login successful!");
      authContext.login(response.data.token, response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 md:p-8 bg-white shadow-sm rounded-md md:border-2 md:border-sky-500 md:shadow-sky-700">
      <h1 className="text-2xl font-bold text-center text-sky-500 mb-6">
        Continue Your Exploration
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-sky-500 text-white rounded-md font-medium hover:bg-sky-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;