import React, { useEffect, useState } from "react";

export default function handleAnimationScroll(selector) {
    const [isVisible, setIsVisible] = useState([]);

    useEffect(() => {
      const handleScroll = () => {
        const targets = document.querySelectorAll(selector);
  
        targets.forEach((target, index) => {
          const targetPosition = target.getBoundingClientRect().top;
          const screenPosition = window.innerHeight;
  
          if (targetPosition < screenPosition) {
            setIsVisible(prevState => {
              const updatedState = [...prevState];
              updatedState[index] = true;
              return updatedState;
            });
          } else {
            setIsVisible(prevState => {
              const updatedState = [...prevState];
              updatedState[index] = false;
              return updatedState;
            });
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
  
  
    return {
        isVisible
  }
}
