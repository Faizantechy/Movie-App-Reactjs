import React from "react";

function Button({text, bgColor, color}) {
  return (
    <div>
      <div className="button">
        <button className="px-3 py-1 rounded  text-black font-bold active:scale-[90%] hover:bg-red-700 " style={{backgroundColor: bgColor, color: color}}>
          <i className="ri-movie-fill"></i> {text}
        </button>
      </div>
    </div>
  );
}

export default Button;
