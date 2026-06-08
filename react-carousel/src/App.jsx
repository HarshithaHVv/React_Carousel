import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>✨ Modern Image Carousel ✨</h1>

      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="slide"
        />

        <button className="prev" onClick={prevSlide}>
          ❮
        </button>

        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              currentIndex === index ? "dot active" : "dot"
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;