import React from "react";
import Pic from "/Banner.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16 md:mt-0">
      <div className="w-full md:w-1/2  md:mt-32 order-2 md:order-1">
        <h1 className="font-bold text-5xl">
          Hello, Welcome to <span className="text-pink-500">PageTurners</span>
        </h1>
        <br />
        <br />
        <p className=" px-3 ">
          Your premier online bookstore where every book is a new adventure. Our
          extensive collection spans across all genres, from gripping thrillers
          and heartwarming romances to enlightening non-fiction and captivating
          sci-fi. With curated selections, personalized recommendations, and
          unbeatable deals, finding your next great read has never been easier.
          Join our community of passionate readers and experience seamless
          shopping, fast shipping, and exceptional customer service.
        </p>

        <Link to={"/signup"}>
          <button
            type="button"
            className="mt-5 text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt:12 md:mt-32 md:ml-40 order-1">
        <img src={Pic} alt="Banner" />
      </div>
      <br />
    </div>
  );
}

export default Banner;
