import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || data))
      .catch((err) => console.error(err));
  }, []);

  const topSkills = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-indigo-600">What Our</span> Students Say
      </h2>

      {/* Responsive Card Wrapper */}
      <div
        className="flex justify-center flex-wrap gap-6 md:gap-10 
        overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory
        md:justify-center"
      >
        {topSkills.map((skill) => (
          <div
            key={skill.skillId}
            data-aos="fade-up"
            className="snap-center flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%]
            bg-white border border-gray-200 rounded-2xl shadow-md 
            hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4 shadow-sm"
            />
            <h3 className="font-semibold text-lg mb-1 text-gray-800">
              {skill.skillName}
            </h3>
            <p className="text-sm text-gray-500 italic mb-2">
              {skill.category}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              "{skill.description}"
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-amber-400 ${
                    i < Math.round(skill.rating) ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700 mt-2">
              — {skill.providerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
