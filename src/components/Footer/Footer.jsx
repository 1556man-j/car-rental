import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    name: "Home",
    link: "/#",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
  {
    name: "Blog",
    link: "/#blog",
  },
];
function Footer() {
  return (
    <div className="pt-10 bg-gray-100 dark:bg-dark dark:text-white">
      <div className="container rounded-t-3xl">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8 text-justify">
            <h1 className="flex items-center text-xl font-bold text-justify sm:text-left">
              Car Rental
            </h1>
            <p className="pt-4 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              natus! Reprehenderit cupiditate, voluptatem porro.
            </p>
            <div className="flex gap-5 mt-7">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex gap-5 mt-2">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex gap-2 pt-5 text-3xl ">
              <div className="duration-300 hover:text-primary">
                <a href="/">
                  <FaInstagram />
                </a>
              </div>
              <div className="duration-300 hover:text-primary">
                <a href="/">
                  <FaFacebook />
                </a>
              </div>
              <div className="duration-300 hover:text-primary">
                <a href="/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-6 py-8 text-justify">
              <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="duration-300 cursor-pointer hover:text-primary"
                    >
                      <span className="pr-2">&#11162;</span>
                      <a href={data.link}>{data.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-6 py-8 text-justify ">
              <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="duration-300 cursor-pointer hover:text-primary"
                    >
                      <span className="pr-2">&#11162;</span>
                      <a href={data.link}>{data.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-6 py-8 text-justify">
              <h1 className="mb-3 text-xl font-bold text-justify sm:text-left">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="duration-300 cursor-pointer hover:text-primary"
                    >
                      <span className="pr-2">&#11162;</span>
                      <a href={data.link}>{data.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
