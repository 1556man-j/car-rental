import React from "react";
import blackCar from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
function Hero({ theme }) {
  return (
    <div className="duration-300 dark:bg-black dark:text-white">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <img src={theme === "dark" ? blackCar : yellowCar} alt="car" className="drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"></img>
          </div>
          <div className="order-2 space-y-5 text-left sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="font-serif text-2xl text-primary">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-serif text-5xl font-bold lg:text-7xl"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-duration="600">
              Lorem, ipsum dolor sit am consectetur adipisicing eli. Id ab
              voluptates iure velit, a dict sci fugiat, alias maiores ad magni
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="py-2 text-black duration-300 rounded-lg bg-primary px-7 hover:bg-primary/80"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
