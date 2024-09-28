import React from "react";
import pattern from "../../assets/pattern.jpeg";
import googleStore from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";
const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  BackgroundPosition: "center",
  height: "100%",
  width: "100%",
};
function AppStore() {
  return (
    <div className="py-6 duration-300 dark:bg-black dark:text-white">
      <div className="container">
        <div
          className="py-10 text-black sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl "
          style={bannerImg}
        >
          <div data-aos="fade-up">
            <div className="max-w-xl mx-auto space-y-7">
              <h1 className="font-serif text-2xl font-bold text-black sm:text-4xl">
                Get Started with our app
              </h1>
              <p className="pb-3 sm:px-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                esse totam laboriosam !
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={googleStore}
                alt="google play"
              />
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={appStore}
                alt="app store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
