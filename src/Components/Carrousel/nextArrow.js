import React from 'react';
import "./style.css"; 
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

export default NextArrow;
