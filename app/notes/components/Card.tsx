import React from "react";

const Card = ({ title, body }: any) => {
  return (
    <div className="w-auto px-4 py-3 bg-green-300 mx-4 rounded-md">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <p className="text-sm font-light">{body}</p>
    </div>
  );
};

export default Card;
