import React, { useEffect, useState } from 'react';
import useWeatherStore from '../data/weatherStore';

const AnimatedNumber = ({ value, duration }) => {
  const { displayValue, setDisplayValue } = useWeatherStore()

  useEffect(() => {
    let startTimestamp;
    const updateNumber = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      const animatedValue = Math.round(value * percentage);

      setDisplayValue(animatedValue);

      if (percentage < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    requestAnimationFrame(updateNumber);

  }, [value, duration]);

  return <span>{displayValue}°C</span>;
};

export default AnimatedNumber;
