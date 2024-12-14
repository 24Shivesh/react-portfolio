import React, { useEffect } from "react";
import "./CursorEffect.css";

const CursorEffect = () => {
  useEffect(() => {
    const crsr = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");

    const handleMouseMove = (dets) => {
      // Adjust cursor position by the current scroll position
      const offsetX = window.scrollX;
      const offsetY = window.scrollY;

      crsr.style.left = dets.x + offsetX + "px";
      crsr.style.top = dets.y + offsetY + "px";
      
      // If you still want to use the blur effect, you can uncomment and adjust as needed
      // blur.style.left = dets.x - 250 + offsetX + "px";
      // blur.style.top = dets.y - 250 + offsetY + "px";
    };

    // Add the event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
};

export default CursorEffect;
