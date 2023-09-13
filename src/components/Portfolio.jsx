import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import foodOrder from "../assets/portfolio/FoodDelivery.png";
import rideNow from "../assets/portfolio/rideNow.jpeg";
import getIt from "../assets/portfolio/getIt.PNG"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodOrder,
      href:"https://clinquant-capybara-9dc4ca.netlify.app",
      git:"https://github.com/LIL-giraffe/FoodOrder"
    },
    {
      id: 2,
      src: getIt,
      href:"https://startling-fox-427743.netlify.app",
      git:"https://github.com/LIL-giraffe/hushhproto"
    },
    {
      id: 3,
      src: rideNow,
      href:"https://twitter.com/swatswat_go_go",
      git:"https://github.com/LIL-giraffe/FoodOrder"
    },
    {
      id: 4,
      src: reactWeather,
      href:"https://twitter.com/swatswat_go_go",
      git:"https://github.com/LIL-giraffe/FoodOrder"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href,git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer" >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={git} target="_blank" rel="noreferrer" >Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
