import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    image_url,
    rating,
    total_view,
    others,
  } = news;

  // Format date
  const publishedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 ">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-3">
            <FaRegBookmark className="text-gray-600 cursor-pointer hover:text-primary"/>
            <FaShareAlt className="text-gray-600 cursor-pointer hover:text-primary" />
        </div>
        
      </div>

      {/* Title */}
      <div className="px-4 py-3">
        <h3 className="font-bold text-lg leading-snug">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure>
        <img
          src={image_url}
          alt="News"
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-gray-600 text-sm">
        {details.length > 250
          ? `${details.slice(0, 250)}... `
          : details}
        {details.length > 250 && (
          <span className="text-blue-600 cursor-pointer font-semibold">
            Read More
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
