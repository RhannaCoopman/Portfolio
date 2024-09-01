import React, { useEffect, useState } from "react";
import gsap from "gsap";

import { zoomIn } from "../../animations/zoom";
import {
  fadeInScrollTrigger,
  fadeInScrollTriggerStagger,
  fadeSideScrollTriggerStagger,
} from "../../animations/fade";
import { animateTextGradient } from "../../animations/appear";

// Icons imports
import { FaBeer } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { FaPython } from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

// Videos
import parkietvideo from "../../Videos/parkietentool-video_EcCIjStN.mp4";
import profilePic from "../../Images/Foto_uitgesneden.png";
import airbnbPic from "../../Images/Schermafbeelding 2023-09-14 om 21.16.56.png";
import codePic from "../../Images/Schermafbeelding 2023-09-17 om 20.43.06.png";

import Nav from "../../Components/Nav";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const elementsWithZoomIn = document.querySelectorAll(
      '[data-animation="zoom_in"]'
    );
    elementsWithZoomIn.forEach((element) => {
      zoomIn(element);
    });
  }, []);

  useEffect(() => {
    // Call the animation function when the component mounts
    animateTextGradient();
  }, []);

  useEffect(() => {
    // Call the animation function when the component mounts
    fadeInScrollTrigger();
  }, []);

  useEffect(() => {
    // Call the animation function when the component mounts
    fadeInScrollTriggerStagger();
  }, []);

  useEffect(() => {
    // Call the animation function when the component mounts
    fadeSideScrollTriggerStagger();
  }, []);

  return (
    <>
      <Nav />
      <main className="box-border max-w-screen bg-light-purple-1 box-border dark:bg-dark-purple-1 pt-16 md:pt-0">
        {/* Hero section */}
        <section
          id="hero"
          className="h-screen w-screen flex flex-col sm:flex-row justify-center items-center py-8"
        >
          {/* Left Side */}
          <div className="w-full text-center sm:text-left sm:w-1/2 px-8 md:px-20">
            <h2
              data-animation="fade-in"
              className="text-2xl font-semibold text-light-purple-2 dark:text-dark-purple-2"
            >
              Rhanna Coopman
            </h2>
            <h1 className="">
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-dark-lightgreen to-light-darkgreen dark:to-dark-lightgreen dark:from-light-darkgreen">
                Fullstack
              </span>{" "}
              webdeveloper with a passion for{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-dark-lightgreen to-light-darkgreen dark:to-dark-lightgreen dark:from-light-darkgreen">
                backend
              </span>
            </h1>
            <div className="m-6 sm:mx-0 grid sm:grid-cols-2 gap-2 ra pr-8">
              <Link className="primary" to={"https://github.com/RhannaCoopman"}>
                My Github
              </Link>
              <Link
                className="secundairy"
                to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"}
              >
                My LinkedIn
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-1/2 px-8 md:px-20 xl:max-h-[70vh] overflow-hidden">
            <img
              src={profilePic}
              alt="Profile"
              className="m-auto"
              data-animation="zoom_in"
            />
          </div>
        </section>

        {/* Skills section */}
        <section className="py-12 px-20">
          <h1 className="" id="skills" data-animation="fade-in">
            My skills
          </h1>

          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {/* Box 1 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <DiJsBadge className="h-8 text-xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  Javascript
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>

            {/* Box 2 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <DiPhp className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  PHP
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>

            {/* Box 3 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <DiCss3 className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  HTML & CSS
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Box 4 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <FaPython className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  Python
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>

            {/* Box 5 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <FaLaravel className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  Laravel
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Box 6 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <TbApi className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  API's
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>

            {/* Box 7 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <SiOpenai className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  AI
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>

            {/* Box 8 */}
            <div
              className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4"
              data-animation="fade-in-stagger"
            >
              <div className="flex justify-center items-center gap-4">
                <DiDatabase className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
                <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                  SQL and NO SQL databases
                </h3>
              </div>
              {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            </div>
          </div>
        </section>

        {/* Project section */}
        <section id="projects" className="py-12 px-20">
          <h1 className="" data-animation="fade-in">
            Projects
          </h1>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Project 1 */}
            <div
              className="bg-light-purple-5 dark:dark-purple-5 rounded-md shadow-md overflow-hidden"
              data-animation="fade-in-stagger"
            >
              <Link to={"/project/1"} className="w-full aspect-video">
                <video width="1000" height="700" controls autoPlay>
                  <source src={parkietvideo} type="video/mp4" />
                </video>
              </Link>
              <div className="grid grid-cols-4 px-8 py-4 h-auto">
                <Link
                  to={"/project/1"}
                  className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2"
                >
                  <h2 className="text-2xl font-semibold">Parkietentool</h2>
                  <p>
                    {" "}
                    This project, built using Laravel 10, primarily focuses on
                    backend development with less emphasis on frontend design.
                    It was undertaken as part of a school assignment, where we
                    received a project brief outlining the website's
                    requirements and functionality. This encompassed everything
                    from designing the database model to implementing the
                    backend features. The purpose of the website is to allow
                    members to purchase rings for their parakeets. In addition,
                    it also had to have a backend for the admin.
                  </p>
                </Link>
                <Link
                  to={"https://github.com/RhannaCoopman/parkietentool"}
                  className="col-span-1 flex gap-8 justify-end items-center h-auto"
                >
                  <FaGithub className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer" />
                </Link>
              </div>
            </div>

            {/* Project */}
            <div
              className="bg-light-purple-5 dark:dark-purple-5 rounded-md shadow-md overflow-hidden"
              data-animation="fade-in-stagger"
            >
              <Link to={"/project/4"} className="w-full aspect-video">
                {/* <video width="1000" height="700" controls autoPlay>
                  <source src={parkietvideo} type="video/mp4" />
                </video> */}
              </Link>
              <div className="grid grid-cols-4 px-8 py-4 h-auto">
                <Link
                  to={"/project/4"}
                  className="col-span-4 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2"
                >
                  <h2 className="text-2xl font-semibold">
                    AI chatbot in Whatsapp
                  </h2>
                  <p>
                    {" "}
                    Dit project heb ik gemaakt voor Kriski Skivakanties tijdens
                    mijn vakantiejob bij Endare. Het project bestaat uit drie
                    onderdelen: een AI-chatbot, integratie met WhatsApp, en het
                    omzetten van de oude Node.js back-end naar Laravel.
                  </p>
                </Link>
              </div>
            </div>

            {/* Project */}
            <div
              className="bg-light-purple-5 dark:dark-purple-5 rounded-md shadow-md overflow-hidden"
              data-animation="fade-in-stagger"
            >
              <Link to={"/project/5"} className="w-full aspect-video">
                {/* <video width="1000" height="700" controls autoPlay>
                  <source src={parkietvideo} type="video/mp4" />
                </video> */}
              </Link>
              <div className="grid grid-cols-4 px-8 py-4 h-auto">
                <Link
                  to={"/project/5"}
                  className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2"
                >
                  <h2 className="text-2xl font-semibold">
                    Afstudeerproject: Social media app om kostuums voor vrouwen
                    te kopen
                  </h2>
                  <p>
                    {" "}
                    Als afstudeerproject heb ik rond kostuums voor vrouwen
                    gewerkt. Dit omdat ik zelf liever hemden en kostuums draag
                    dan jurken, maar er zijn weinig opties om kostuums te kopen
                    of om mensen te leren kennen die ook liever kostuums dragen.
                    <br></br>
                    Het doel van de web-app is om te inspireren, te helpen waar
                    je kostuums kunt kopen, en om contact te leggen met de
                    community. De app bestaat enerzijds uit een
                    gepersonaliseerde feed, die wordt bepaald door de posts die
                    de gebruiker liket, opslaat en bekijkt. Daarnaast krijg je
                    aanbevelingen voor gebruikers die een gelijkaardige stijl
                    hebben, gebaseerd op wat jij hebt geliket en wat de andere
                    gebruiker heeft geliket. Ten slotte kun je ook zelf posts
                    maken met een afbeelding van je outfit, en kun je per
                    kledingstuk annotaties toevoegen waarmee je kunt aangeven
                    waar jij het gekocht hebt, zodat anderen dit ook kunnen
                    kopen.
                  </p>
                </Link>
                <Link
                  to={"https://github.com/RhannaCoopman/Costumes"}
                  className="col-span-1 flex gap-8 justify-end items-center h-auto"
                >
                  <FaGithub className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About me section */}
        <section id="about" className="py-12 px-20">
          <h1 data-animation="fade-in" className="">
            About me
          </h1>

          <div className="grid grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-24">
            <div
              data-animation="fade-in"
              className="text-light-purple-3 dark:text-dark-purple-3 col-span-full md:col-span-2 lg:col-span-1 m-auto"
            >
              Hi! Ik ben Rhanna en ik ben een junior developer. Ik ben net
              afgestudeerd aan Artevelde hogeschool. Mijn interesses zijn
              wandelen, koken en bakken.
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-1 overflow-hidden m-auto">
              <img
                src={profilePic}
                alt="Profile"
                className="m-auto"
                data-animation="zoom_in"
              />
            </div>
          </div>
        </section>

        {/* Work section */}
        <section id="internship" className="py-12 px-20">
          <h1 data-animation="fade-in" className="">
            Work
          </h1>

          <div className="grid grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="col-span-full md:col-span-1 lg:col-span-1 overflow-hidden m-auto bg-red-200">
              <img src={codePic} alt="Code" className="object-cover" />
            </div>

            <div className="text-light-purple-3 dark:text-dark-purple-3 col-span-full md:col-span-2 lg:col-span-1 m-auto">
              Ik ben momenteel op zoek naar een junior positie in
              softwareontwikkeling. Ik ben vooral geïnteresseerd in een back-end
              positie. Momenteel heb ik de meeste ervaring in Laravel, en dit is
              zeker een richting waarin ik verder wil gaan. Daarnaast heb ik een
              interesse ontwikkeld in Python en AI, en zou ik hier ook zeker in
              willen groeien. Ik vind dat ik nog veel groeipotentieel heb en nog
              veel programmeertalen en technologieën te ontdekken heb, dus ik
              wil me zeker nog niet beperken tot enkel deze voorkeuren.
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-12 px-20 pb-36">
          <h1 data-animation="fade-in" className="">
            Contact me
          </h1>

          <div className="grid grid-rows-3 gap-6">
            <div
              className="flex gap-10 items-center"
              data-animation="fade-side-stagger"
            >
              <BsTelephone className="text-light-darkgreen dark:text-dark-darkgreen text-2xl" />
              <p className="break-words text-light-purple-3 dark:text-dark-purple-3">
                +32 479 498 223
              </p>
            </div>

            <div
              className="flex gap-10 items-center"
              data-animation="fade-side-stagger"
            >
              <HiOutlineMail className="text-light-darkgreen dark:text-dark-darkgreen text-2xl" />
              <p className="break-words text-light-purple-3 dark:text-dark-purple-3">
                rhanna.coopman<wbr></wbr>@hotmail.com
              </p>
            </div>

            <div
              className="flex gap-10 items-center"
              data-animation="fade-side-stagger"
            >
              <BsLinkedin className="text-light-darkgreen dark:text-dark-darkgreen text-2xl" />
              <Link
                to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"}
                className="break-words text-light-purple-3 dark:text-dark-purple-3"
              >
                https://www.linkedin.com/in/rhanna-coopman-4589991bb/
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
