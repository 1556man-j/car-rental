import React from "react";
import WhiteCar from "../../assets/car1.png";
import Car2 from "../../assets/car5.png";
import Car3 from "../../assets/car6.png";
const CarListsData = [
  {
    name: "BMW UX",
    Price: "$100/Day",
    aosDelay: 0,
    Image: WhiteCar,
  },
  {
    name: "KIA UX",
    Price: "$140/Day",
    aosDelay: "500",
    Image: Car2,
  },
  {
    name: "BMW UX",
    Price: "$100/Day",
    aosDelay: "1000",
    Image: Car3,
  },
];
function CarList() {
  return (
    <div className="duration-300 dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center py-14">
      <div className="container">
        <div className="space-y-3 text-left">
          <h1
          data-aos="fade-up"
           className="font-serif text-4xl font-bold md:text-5xl">
            Lorem ipsum dolor.
          </h1>
          <p 
          data-aos="fade-up"
          className="text-sm font-middle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            eligendi
          </p>
        </div>
        <div 
        className="grid grid-cols-1 gap-16 mt-8 md:grid-cols-3 sm:grid-cols-2">
          {CarListsData.map((data) => (
            <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
              className="relative p-3 border-2 border-gray-300 rounded-xl group hover:border-primary"
              key={data.name}
            >
              <div className="w-full h-[120px]">
                <img
                  src={data.Image}
                  alt={data.name}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                />
              </div>
              <div>
                <h1 className="font-bold text-left text-primary">
                  {data.name}
                </h1>
              </div>
              <div className="flex justify-between pt-3 text-xl font-bold">
                <p>{data.Price}</p>
                <a href="/">Detail</a>
              </div>
              <p className="absolute top-0 text-xl font-bold left-3">12km</p>
            </div>
          ))}
        </div>
        <button
          data-aos="fade-up"
          data-aos-delay="1500"
          className="py-2 border-2 rounded-lg text-primary border-primary px-7 hover:bg-primary mt-7 hover:text-black"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CarList;
