import React from "react";
import aboutCar from "../../assets/car1.png";
function About() {
  return (
    <div className="duration-300 dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100">
      <div className="container flex">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
          <div className="">
            <img
              data-aos="slide-right"
              data-aos-duration="1500"
              className="drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] max-h-[300px]"
              src={aboutCar}
              alt="car"
            ></img>
          </div>
          <div className="pb-6 space-y-5 text-left sm:p-16">
            <h1
              data-aos="fade-up"
              className="font-serif text-3xl font-bold lg:text-5xl sm:text-4xl"
            >
              About us
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              doloremque at necessitatibus laborum libero molestiae velit quod
              est.
            </p>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </p>
            <button
              data-aos="fade-up"
              className="px-6 py-2 tracking-wider duration-500 border-2 border-solid rounded-lg text-md border-primary text-primary hover:bg-primary hover:text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
