// src/pages/SkillDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase/firebase.config";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Fetch skill data from public/skills.json
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : data.skills || [];
        const found = arr.find((item) => item.skillId === parseInt(id, 10));
        setSkill(found || null);
      })
      .catch((err) => {
        console.error("Error loading skills.json:", err);
        setSkill(null);
      });
  }, [id]);

  // Prefill with Firebase logged-in user data
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle booking submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Session booked successfully!");
    console.log("Booking Info:", { ...formData, skill });
    setFormData({ name: "", email: "" });
  };

  if (!skill) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500 text-lg">
        Loading skill details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-200 to-blue-200 pb-12">
      <Toaster position="top-center" />

      {/* Banner Image */}
      <div className="relative w-full h-72 sm:h-96 overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg">
            {skill.skillName}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="bg-gradient-to-b from-white to-sky-200 rounded-2xl shadow-lg p-6 sm:p-10 border">
          {/* Skill Info */}
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            {skill.skillName}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {skill.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-gray-700">
            <div>
              <p>
                <span className="font-semibold">💰 Price:</span> ${skill.price}
              </p>
              <p>
                <span className="font-semibold">⭐ Rating:</span> {skill.rating}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">👩‍🏫 Provider:</span>{" "}
                {skill.providerName}
              </p>
              <p>
                <span className="font-semibold">📧 Email:</span>{" "}
                {skill.providerEmail}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">🗂️ Category:</span>{" "}
                {skill.category}
              </p>
              <p>
                <span className="font-semibold">🕒 Available Slots:</span>{" "}
                {skill.slotsAvailable}
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-300" />

          {/* Booking Form */}
          <h3 className="text-xl   font-semibold mb-4 text-gray-800">
            Book a Session
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-50 p-5 rounded-xl border"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-900 transition duration-300 shadow-md"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
