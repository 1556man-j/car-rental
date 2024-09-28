import './App.css';
import React, {useEffect} from'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStore from './components/AppStore/AppStore';
import Contact from './components/Contact/Contact';
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from './components/Footer/Footer';
function App() {
  // use local storage to persist theme between sessions
  const [theme , setTheme] =React.useState(
  localStorage.getItem("theme")?
  localStorage.getItem("theme") :"light"
  );
  const element = document.documentElement;
  useEffect (() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  React.useEffect (() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-sine",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
      offset: 100,
      disableMutationObserver: true,
      resetOnHidden: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar theme= {theme} setTheme = {setTheme}/>
      <Hero  theme = {theme} />
      <About />
      <Services />
      <CarList/>
      <Testimonial/>
      <AppStore/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
