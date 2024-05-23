import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ action, isVisible }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform action based on the prop passed
    if (action === "addUser") {
      axios
        .post("https://fakestoreapi.com/users", formData)
        .then((res) => console.log("User added:", res.data))
        .catch((err) => console.log(err));
    } else if (action === "updateUser") {
      axios
        .put(`https://fakestoreapi.com/users/${formData.id}`, formData)
        .then((res) => console.log("User updated:", res.data))
        .catch((err) => console.log(err));
    }
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
    <form onSubmit={handleSubmit} className={isVisible ? "" : "hidden"}>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block"
      />
      {/* Add other input fields */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
