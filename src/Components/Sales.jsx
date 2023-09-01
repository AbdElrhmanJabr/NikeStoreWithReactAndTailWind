import React from "react";
import Title from "./Utils/Title";
import Item from "./Utils/Item";

const Sales = ({ ifExist, endpoint: { title, items } }) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center ${
          ifExist
            ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-5 mt-7 "
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-5 mt-7 "
        }`}
      >
        {items.map((val, i) => {
          return <Item key={i} {...val} ifExist={ifExist} />;
        })}
      </div>
    </div>
  );
};

export default Sales;
