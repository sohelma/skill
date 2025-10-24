import React from "react";
import { Link } from "react-router-dom";

const SkillsCard = ({ skill }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{skill.skillName}</h2>
      <p className="text-gray-600 mb-1">Price: ${skill.price}</p>
      <p className="text-yellow-500 font-medium mb-3">Rating: {skill.rating} ⭐</p>
      <Link
        to={`/skill/${skill.skillId}`}
        className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default SkillsCard;
