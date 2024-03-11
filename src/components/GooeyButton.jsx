import React from 'react';
import PropTypes from 'prop-types';
import '../css/GooeyButton.scss';

const GooeyButton = ({ buttonText, isActive, onClick }) => {
  return (
    <>
      <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button id="gooey-button" style={{ filter: 'url(#gooey)', backgroundColor: isActive ? '#yourActiveColor' : '#yourDefaultColor' }} onClick={onClick}>
        {buttonText}
        <span className="bubbles">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="bubble"></span>
          ))}
        </span>
      </button>
    </>
  );
};

GooeyButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default GooeyButton;
