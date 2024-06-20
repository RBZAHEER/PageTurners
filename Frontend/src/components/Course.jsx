import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" items-center justify-center text-center">
          <h1 className="font-bold text-2xl md:text-3xl">
            Explore Our Extensive Collection of{" "}
            <span className="text-pink-500">Courses {":) "}</span>
          </h1>

          <p className="container p-10">
            Whether you're seeking to expand your horizons with free educational
            resources or investing in top-notch paid courses, we've got you
            covered. Our curated selection spans across a multitude of genres
            and disciplines, from literature and history to science and
            technology. Dive into our vast library and discover the perfect
            course to enhance your skills, ignite your passion, and propel your
            career forward. Each course is meticulously crafted to provide
            valuable insights, practical knowledge, and engaging content. Join
            our community of lifelong learners and start your educational
            journey today with our diverse array of both free and premium
            courses.
          </p>
          <Link to={"/"}>
            <button
              type="button"
              className="mt-2 text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            >
              Back
            </button>
          </Link>

          <div className=" space-y-3 grid grid-cols-1 md:grid-cols-4 mt-5 ">
            {list.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Course;
