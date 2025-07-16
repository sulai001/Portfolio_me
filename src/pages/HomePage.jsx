import React from "react";
import "../assets/css/main.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Lanyard from "../components/Lanyard";
import SplashCursor from "../components/SplashCursor";
import Squares from "../components/Squares";
import Contect from "../components/Contect";
import Footer from "../components/Footer";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      {/* Lanyard is now absolutely positioned above everything */}
      <div>
      <Header />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -50, 0]} scale={[10, 2, 2]} /> */}
      <main className="main-horizontal-scroll">
        <SplashCursor />
        {/* <section className=""> */}
          <Hero />
        {/* </section> */}
        <section className="section-horizontal">
          <About />
        </section>
        <section className="section-horizontal">
          <Stats />
        </section>
        <section className="section-horizontal">
          <Skills />
        </section>
        <section className="section-horizontal">
          <Resume />
        </section>
        <section className="section-horizontal">
          <Portfolio />
        </section>
        <Contect />
      </main>
      {/* <Footer/> */}
        </div>
      {/* Add <Footer /> here if you have one */}
    </>
  );
}