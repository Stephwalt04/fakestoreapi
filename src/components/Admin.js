import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/users", formData)
      .then((res) => {
        console.log("User added:", res.data);
        // Update the users state or handle the response as needed
        setUsers([...users, res.data]); // Add new user to the users state
      })
      .catch((err) => console.log(err));

    // Clear the form after submission
    setFormData({
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      lat: "",
      long: "",
      phone: "",
    });
  };

  return (
    <div className="mt-20">
      <nav className="bg-gray-800 p-4 flex items-center justify-between ">
        <div>
          <h1 className="text-white text-xl font-semibold">User Management</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link to={"/login"} placeholder="Login to your Account">
            <i className="fas fa-user-circle text-white text-2xl"></i>
          </Link>
        </div>
      </nav>

      <div className=" flex flex-row">
        <aside className="bg-gray-800 text-white w-[12%] min-h-screen p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => console.log("Add User clicked")}
                >
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>Add User</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                    <span>Edit User</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fas fa-chart-bar mr-2"></i>
                    <span>Update User</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fas fa-file-alt mr-2"></i>
                    <span>Delete User</span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Second section  - Right side of the page */}
        <main className=" text-white w-[88%] min-h-screen p-4 mx-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="block"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Admin;
