import React from "react";

function Contact() {
  return (
    <div className="duration-300 dark:bg-black dark:text-white py-14">
      <div className="container">
        <div data-aos="zoom-in" className="grid grid-cols-1 gap-6 px-6 py-8 bg-gray-800 sm:grid-cols-3">
          <div className="col-span-2 text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Let's collaborate on your
              <br />
              upcoming car rental venture
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus molestiae sed voluptates aut odio in doloribus beatae
              quod quidem.
            </p>
          </div>
          <div className="grid place-items-center">
            <button className="inline px-6 py-3 font-semibold tracking-wider text-white uppercase duration-300 rounded-lg bg-primary hover:bg-primary/80" >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
