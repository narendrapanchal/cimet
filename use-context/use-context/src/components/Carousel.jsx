import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoPlay); // Clear interval on component unmount
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-80 object-cover rounded-lg" // Increased height from h-64 to h-80
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
