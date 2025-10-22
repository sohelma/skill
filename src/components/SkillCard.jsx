import React from "react";
import { FaStar } from "react-icons/fa";

const SkillCard = ({ skill }) => {
  const {
    skillName,
    providerName,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skill;

  return (
    <div className="card bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all">
      <img
        src={image}
        alt={skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">{skillName}</h2>
        <p className="text-sm text-gray-500">by {providerName}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-700 font-semibold">${price}</span>
          <span className="flex items-center text-yellow-500 text-sm">
            <FaStar className="mr-1" /> {rating}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm mt-1 text-gray-500">
          <p>Category: {category}</p>
          <p>Slots: {slotsAvailable}</p>
        </div>

        <button className="btn bg-blue-600 text-white w-full mt-3 hover:bg-blue-700">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
