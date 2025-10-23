import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Assuming skills.json is in public folder
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        // যদি JSON object হয় with "skills" key
        setSkills(data.skills || data); // যদি সরাসরি array থাকে data ব্যবহার হবে
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div key={skill.skillId} className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src={skill.image} alt={skill.skillName} className="w-full h-48 object-cover rounded" />
          <h2 className="font-bold mt-2">{skill.skillName}</h2>
          <p>Provider: {skill.providerName}</p>
          <p>Price: ${skill.price}</p>
          <p>Rating: {skill.rating}</p>
          <Link to={`/skill/${skill.skillId}`} className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
