import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center text-5xl lg:text-4xl md:text-3xl text-slate-900 font-bold filter drop-shadow-lg">
        {title}
      </div>
    </>
  );
};

export default Title;
