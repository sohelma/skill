import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Learn Skills That Matter",
    subtitle: "Upskill yourself with expert-led online sessions.",
    image: "/images/yoga.jpg",
  },
  {
    id: 2,
    title: "Grow Your Passion Into Profession",
    subtitle: "From coding to cooking — learn from the best mentors.",
    image: "/images/web2.jpg",
  },
  {
    id: 3,
    title: "The Smart Way to Learn.",
    subtitle: "Join thousands of learners and start your journey today.",
    image: "/images/photography.jpg",
  },
   {
    id: 4,
    title: "Connect. Learn. Succeed.",
    subtitle: "Join thousands of learners and start your journey today.",
    image: "/images/cook2.jpg",
  },
    {
    id: 4,
    title: "Giter: Skill Made Simple.",
    subtitle: "Join thousands of learners and start your journey today.",
    image: "/images/giter.jpg",
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg max-w-2xl mb-6 opacity-90">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                  {/* <Link
                    to="/skills"
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-6 py-3 rounded-lg shadow-lg transition text-white font-semibold"
                  >
                    Explore Skills
                  </Link> */}
                  {/* <Link
                    to="/register"
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
                  >
                    Join Now
                  </Link> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
