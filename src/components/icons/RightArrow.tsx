import React from "react";

const RightArrow = () => {
  return (
    <svg
      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M20 12L16 8M20 12L16 16"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
