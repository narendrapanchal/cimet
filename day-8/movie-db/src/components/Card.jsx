// MovieCard.js
import React from "react";
import "../styles/Card.css";
const Card = ({ card: { src, rating, title, date, id ,isTv=false} }) => {
 
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const radius = 25;
  const totalCircumference = Math.PI * 2 * radius; // Circumference of the circle
  const greenLength = (rating / 10) * totalCircumference;
  const whiteLength = totalCircumference - greenLength;
  return (
    <div
      className="card"
      style={{ padding: "0px" }}
      onClick={() => {
        window.location.href =(isTv?"/tv/": "/movie/") + id;
      }}
    >
      <img
        src={"https://image.tmdb.org/t/p/original"+
          (src != null
            ? src
            : "/kbI9M2m45SSwi3t5ztygAlKxUql.jpg")
        }
        alt={title}
        className="image"
        width={230}
        height={300}
        style={{ width: "230px", height: "300px" }}
      />
      <div className="details">
        <div className="ratingContainer">
          <svg width="60" height="60">
            {/* Background circle in white */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="white"
              strokeWidth="5"
              fill="white"
            />
            {/* Green segment for the rating */}
            <circle
              cx="30"
              cy="30"
              r={23}
              stroke={rating>7.5?"green":rating>6?"orange":"red"}
              strokeWidth="5"
              fill="none"
              strokeDasharray={`${greenLength} ${whiteLength}`}
              strokeDashoffset={whiteLength} // Start offset to have green at the top
              style={{ transform: "rotate(10deg)", transformOrigin: "50% 50%" }}
            />
          </svg>
          <span className="ratingText">{rating.toFixed(1)}</span>
        </div>
        <h2 className="title show-in-one-line">{title}</h2>

        <p className="date">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Card;
