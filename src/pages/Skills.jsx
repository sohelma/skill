// src/pages/Skills.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  // Simulate user login state
  const isLoggedIn = true; // later replace with auth state

  useEffect(() => {
    fetch('/skills.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  const handleViewDetails = (id) => {
    if(isLoggedIn){
      navigate(`/skill/${id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 p-5">
      {skills.map(skill => (
        <div key={skill.skillId} className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition">
          <img src={skill.image} alt={skill.skillName} className="rounded-md w-full h-40 object-cover mb-3" />
          <h2 className="text-xl font-bold mb-1">{skill.skillName}</h2>
          <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
          <p className="text-gray-800 font-semibold mb-2">💰 ${skill.price} | ⭐ {skill.rating}</p>
          <button onClick={() => handleViewDetails(skill.skillId)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Skills;