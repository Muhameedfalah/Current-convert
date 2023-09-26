import React from "react";
import Lottie from 'react-lottie';
import animationData from '../images/animation_lmp1t9rd.json';



export const CurrencySwitcher = ({ disabled, onSwitch }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const buttonStyle = {
    background: '#0e6071', 
    border: 'none',
  };


  return (
    <div className="button-container">
      <button
      type="button"
      onClick={onSwitch}
      style={buttonStyle}
      >
        <Lottie
          options={defaultOptions}
          height={50} // גובה שאתה רוצה
          width={50} // רוחב שאתה רוצה
          onClick={onSwitch}
        />
      </button>
    </div>

  );
};
