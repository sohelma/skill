import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // AOS animation initialization
    AOS.init({ duration: 1000 });

    // Fetch skills.json
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || data))
      .catch((err) => console.error(err));
  }, []);

  // Top 3 rated skills for testimonial cards
  const topSkills = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topSkills.map((skill) => (
          <div
            key={skill.skillId}
            data-aos="fade-up"
            className="p-6 border rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white text-center"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{skill.skillName}</h3>
            <p className="text-sm italic text-gray-500 mb-2">{skill.category}</p>
            <p className="text-gray-700">"{skill.description}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
