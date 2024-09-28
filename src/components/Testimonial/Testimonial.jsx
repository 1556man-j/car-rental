import React from "react";
import Customer from "../../assets/user-2.jpg";
function Testimonial() {
  return (
    <div>
      <div className="duration-300 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center py-14">
        <div className="container">
          <div>
            <h1 className="pb-3 font-serif text-3xl font-bold">
              What Our Clients Says About Us
            </h1>
            <p className="pb-14">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            <div
              data-aos="fade-up"
              className="p-4 space-y-3 text-center text-black bg-gray-100 rounded-lg group card sm:space-y-6 sm:py-16 dark:bg-white/20 dark:text-white"
            >
              <div className="grid place-items-center">
                <img
                  alt="customer"
                  src={Customer}
                  className="grid text-5xl duration-300 text-primary group-hover:text-black place-items-center rounded-[50%] w-20"
                />
              </div>
              <div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p className="font-bold">Dilshad</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="p-4 space-y-3 text-center text-black bg-gray-100 rounded-lg group card sm:space-y-6 sm:py-16 dark:bg-white/20 dark:text-white"
            >
              <div className="grid place-items-center">
                <img
                  alt="customer"
                  src={Customer}
                  className="grid text-5xl duration-300 rounded-[50%] w-20 text-primary place-items-center"
                />
              </div>
              <div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p className="font-bold">Satya</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="p-4 space-y-3 text-center text-black bg-gray-100 rounded-lg group card sm:space-y-6 sm:py-16 dark:bg-white/20 dark:text-white"
            >
              <div className="grid place-items-center">
                <img
                  alt="customer"
                  src={Customer}
                  className="grid text-5xl duration-300 text-primary place-items-center rounded-[50%] w-20"
                />
              </div>
              <div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p className="font-bold">Sabir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
