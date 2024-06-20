import React from "react";
import Cardimg from "/cardbook.jpg";

function Cards({ item }) {
  // console.log(item);
  return (
    <div className="max-w-screen-2xl container mx-auto ml-5 md:ml-0 md:px-20 px-4 mt-4">
      <div className="card w-80 h-auto bg-base-100 shadow-xl flex flex-col  duration-300 hover:scale-95 dark:bg-slate-900 dark:text-white dark:border-white border-solid">
        <figure className="flex-grow overflow-hidden">
          <img
            src={Cardimg}
            alt="Book Cover"
            className="object-cover w-full h-48 md:h-60 "
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg md:text-xl">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="mt-2">{item.mini_description}</p>
          </div>
          <div className="card-actions mt-2 justify-between">
            <div className="badge badge-outline">${item.Price}</div>
            <div className="badge badge-outline hover:bg-pink-400 cursor-pointer duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
