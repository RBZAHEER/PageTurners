import React from "react";
import list from "/public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Filter data where category is "Free"
  const filterData = list.filter((data) => data.category === "Free");

  return (
    <>
      <br />
      <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8">
          <h1 className="font-bold text-2xl"> Free Offered Courses </h1>
          <p className="container mt-2 pr-3">
            Explore our collection of free books, where knowledge meets no cost.
            Enjoy a diverse selection spanning genres, from classics to
            contemporary reads, all at your fingertips.
          </p>
        </div>
        <div className="slider-container px-2  ">
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item.id} className="px-1">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </>
  );
}

export default Freebook;
