import React from "react";

const Process = (props) => {
  return (
    <div
      className={`px-8 py-10 ${props.proRotate} bg-gray-800 rounded-xl shadow-xl sticky top-12 border border-gray-900`}
    >
      <h1 className="mb-4 text-5xl font-black text-orange-600">
        {props.proId}
      </h1>
      <h2 className="mb-2 text-2xl font-extrabold text-white">
        {props.proTitle}
      </h2>
      <p className="text-xl text-gray-400">{props.proDesc}</p>
    </div>
  );
};

export default Process;
