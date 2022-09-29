import React from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Footer from "./component/footer/Footer"
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About/> 
      <Experience/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>

    </>
  );
};

export default App;