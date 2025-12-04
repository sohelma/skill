// src/pages/ContactUs.jsx
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    console.log("Contact Form Data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-center" />

      {/* Page Header with top space */}
      <div className="mt-10 bg-gradient-to-r from-amber-600 to-orange-300 text-white py-12 px-6 text-center rounded-lg max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We would love to hear from you!</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-10 p-6 gap-10">
        {/* Contact Info */}
        <div className="lg:w-1/3 bg-white rounded-2xl shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Reach out to us via phone, email, or drop by our office. We're happy
            to assist you!
          </p>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-500" /> 123 Main Street,
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-amber-500" /> +880 1234 567890
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500" /> info@example.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 h-32 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-300 text-white py-3 rounded-lg font-medium hover:from-amber-700 hover:to-orange-400 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
