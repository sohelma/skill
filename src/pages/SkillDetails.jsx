import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real auth
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(id));
        setSkill(found);
      });
  }, [id]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!skill) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" }); // ✅ form clear now
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Toaster />
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{skill.skillName}</h2>
      <p className="text-gray-700 mb-4">{skill.description}</p>
      <p className="text-gray-900 font-semibold mb-2">
        💰 Price: ${skill.price} | ⭐ Rating: {skill.rating}
      </p>

      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-md shadow-sm bg-white"
      >
        <h3 className="text-xl font-semibold mb-2">Book Session</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SkillDetails;