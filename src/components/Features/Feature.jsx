import React from "react";

const Feature = (props) => {
  return (
    <div className="px-6 flex flex-col justify-start items-center">
      <div className="flex justify-center items-center mb-4 shadow-xl rounded-full bg-gradient-to-br from-pink-400 to-orange-600 md:w-16 md:h-16 lg:h-16 lg:w-16 w-20 h-20">
        <i
          className={`text-white md:text-2xl lg:text-2xl text-3xl ${props.featureIcon}`}
        ></i>
      </div>
      <h3 className="mb-2 text-center text-2xl font-bold dark:text-white">
        {props.featureTitle}
      </h3>
      <p className="text-center text-xl text-gray-500 dark:text-gray-400">
        {props.featureDesc}
      </p>
    </div>
  );
};

export default Feature;
