import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form data:", formData);
    navigate(-1); // Navigate back after submission
  };

  return (
    <div className="min-h-screen w-full bg-[#1F1E24] text-white flex justify-center items-center">
      <div className="max-w-lg w-full p-6 bg-gray-900 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#6556CD] hover:bg-[#4b41b5] text-white font-bold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
