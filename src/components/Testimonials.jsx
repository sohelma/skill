import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || data))
      .catch((err) => console.error(err));
  }, []);

  const topSkills = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        <span className="text-indigo-600">What Our </span>Students Say
      </h2>

      {/* Card Container */}
      <div className="flex justify-center">
        <div className="flex gap-8 overflow-x-auto pb-4 px-8 mx-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {topSkills.map((skill) => (
            <div
              key={skill.skillId}
              data-aos="fade-up"
              className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="p-6">
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-indigo-100"
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {skill.skillName}
                </h3>
                <p className="text-sm text-indigo-500 mb-2">{skill.category}</p>
                <p className="text-gray-600 italic mb-4">
                  “{skill.description}”
                </p>
                <div className="flex justify-center items-center gap-2 text-yellow-500">
                  {"★".repeat(Math.round(skill.rating))}
                  <span className="text-gray-600 text-sm">
                    {skill.rating.toFixed(1)} / 5
                  </span>
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  — {skill.providerName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
