// AboutUs.jsx
import React from 'react';

const teamMembers = [
  {
    name: "Sohel Mamun",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Masuda Begum",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    github: "#",
  },
  {
    name: "John Doe",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    github: "#",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-300 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto">
          We are a team of passionate developers and designers building high-quality web applications.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Story</h2>
        <p className="text-center text-gray-600">
          Founded in 2023, our mission is to deliver seamless digital experiences. We combine creativity, technology, and passion to bring ideas to life.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={member.github} className="text-gray-800 hover:text-gray-900" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
