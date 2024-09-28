import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

function Services() {
  return (
    <div className="duration-300 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center py-14">
      <div className="container">
        <div>
          <h1 className="font-serif text-3xl font-bold p-14">Why Choose Us</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
          <div
            data-aos="fade-up"
            className="p-4 space-y-3 text-center text-white rounded-lg group bg-dark card sm:space-y-6 sm:py-16 hover:bg-primary hover:text-black"
          >
            <div className="grid place-items-center">
              <FaCameraRetro className="grid text-5xl duration-300 text-primary group-hover:text-black place-items-center" />
            </div>
            <p>Best Price</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Learn More</button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-4 space-y-3 text-white rounded-lg bg-dark card sm:space-y-6 sm:py-16 hover:bg-primary hover:text-black group"
          >
            <div className="grid place-items-center">
              <GiNotebook className="grid text-5xl duration-300 text-primary group-hover:text-black place-items-center" />
            </div>
            <p>Best Price</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Learn More</button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="p-4 space-y-3 text-white rounded-lg bg-dark card sm:space-y-6 sm:py-16 hover:bg-primary hover:text-black group"
          >
            <div className="grid place-items-center">
              <SlNote className="grid text-5xl duration-300 text-primary group-hover:text-black place-items-center" />
            </div>
            <p>Best Price</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
