import React from "react";

const Card = () => {
  return (
    <div className="bg-white drop-shadow-lg flex justify-between p-2 my-5 shadow-lg rounded">
      <div className="flex flex-col">
        <p className="text-base text-gray-800 w-6/12 font-bold">Task Title</p>
        <span className="text-sm text-gray-500">Published 3 minutes ago</span>
      </div>
      <span className="bg-sky-400 text-white rounded-3xl w-[15%] h-max text-center">
        Active
      </span>
    </div>
  );
};

export default Card;
