// components/Taloneras/Card.jsx
import { useState } from 'react';
import './styles.css';

export const Card = ({ images, title, price, sizes }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="card">
      <div className="card-slider">
        {images.length > 1 && <button className="prev" onClick={prevSlide}>&#10094;</button>}
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagen ${i + 1}`}
            className={`slide ${i === index ? '' : 'hidden'}`}
          />
        ))}
        {images.length > 1 && <button className="next" onClick={nextSlide}>&#10095;</button>}
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="card-content">
        <div className="caja-titulo">
          <h2>Diseño: {title}</h2>
        </div>
        <div className="caja-precio">
          <h1>S/{price}</h1>
        </div>
        <div className="caja-tallas">
          <h3>Tallas</h3>
          <h3>{sizes}</h3>
        </div>
      </div>
    </div>
  );
};
