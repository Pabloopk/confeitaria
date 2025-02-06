import React from "react";

const ScrollingText = ({ text, speed = 10}) => {
  return (
    <div className="relative mt-32  md:h-9 transition-all overflow-hidden h-32 flex items-center ">
      <div
        className="absolute whitespace-nowrap animate-scrolling"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span
          className="text-8xl md:text-5xl font-extrabold  uppercase text-transparent"
          style={{
            WebkitTextStroke: "2px gray",
             // Define a cor e a espessura da borda
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;