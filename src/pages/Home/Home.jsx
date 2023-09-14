import React, { useEffect, useState } from "react";
import gsap from "gsap";

import { zoom_in } from "../../animations/zoom"
import { fadeInScrollTrigger } from "../../animations/fade"


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

import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";


// Videos
import parkietvideo from "../../Videos/parkietentool-video_EcCIjStN.mp4";
import profilePic from "../../Images/Foto_uitgesneden.png";
import airbnbPic from "../../Images/Schermafbeelding 2023-09-14 om 21.16.56.png";



import Nav from "../../Components/Nav";
import { Link } from "react-router-dom";

const Home = () => {

  zoom_in();
  fadeInScrollTrigger();
  // // Declare variabels
  // const [data, setData] = useState();


  // // UseEffect to fetch the data
  // useEffect(() => {
  //   let isActive = true;

  //     if(!data){
  //       fetch("../../../public/projects.json")
        
  //       .then(response => response.json())
  //       .then(response => {
  //         //Als deze component nog actief is updaten we de data van onze 2 variabelen
  //         if(isActive) {
  //           setData(response)
  //         }
  //       })
  //     }
  //     return () => isActive = false;
  // }, [])



  return (
    <>
    < Nav />
    <main className="box-border max-w-screen bg-light-purple-1 box-border dark:bg-dark-purple-1">
      {/* Hero section */}
      <section id="hero" className="h-screen w-screen flex flex-col sm:flex-row justify-center items-center py-8">
        {/* Left Side */}
        <div className="w-full text-center sm:text-left sm:w-1/2 px-8 md:px-20">
          <h2 className="text-2xl font-semibold text-light-purple-2 dark:text-dark-purple-2">Rhanna Coopman</h2>
          <h1 className="" data-animation='fade-in'>
            <span className="text-light-darkgreen dark:text-dark-darkgreen dark:text-dark-darkgreen">Fullstack</span> webdeveloper with a passion for <span className="text-light-darkgreen dark:text-dark-darkgreen dark:text-dark-darkgreen">backend</span>.
          </h1>
          <p className="text-md text-light-purple-2 dark:text-dark-purple-2">Currently looking for an internship</p>
          <div className="m-6 sm:mx-0 grid grid-cols-2 gap-2 pr-8">
            <Link className="primary" to={"https://github.com/RhannaCoopman"}>
              My Github
            </Link>
            <Link className="secundairy" to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"}>
              My LinkedIn
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/2 px-8 md:px-20 xl:max-h-[70vh] overflow-hidden">
          <img
            src={profilePic}
            alt="Image"
            className="m-auto"
            data-animation="fade_in"
          />
        </div>
      </section>

      {/* Skills section */}
      <section className="py-12 px-20">
        <h1 className="" id="skills">
          My skills
        </h1>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Box 1 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
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
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <DiPhp className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                Php
              </h3>
            </div>
            {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>

          {/* Box 3 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
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
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <DiReact className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                MERN
              </h3>
            </div>
            {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>

          {/* Box 5 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
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
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <TbApi className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                API
              </h3>
            </div>
            {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>

          {/* Box 7 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                Language
              </h3>
            </div>
            {/* <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>

          {/* Box 8 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="h-8 text-2xl mt-2 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-3 text-light-darkgreen dark:text-dark-darkgreen">
                Language
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
        <h1 className="">
          Projects
        </h1>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Project 1 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <Link to={"/project/1"} className="w-full aspect-video">
            <video width="1000" height="700" controls autoPlay>
                <source src={parkietvideo} type="video/mp4" />
              </video>
            </Link>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <Link to={"/project/1"} className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
              Parkietentool (Fullstack Laravel 10)
              </Link>
              <Link to={"https://github.com/RhannaCoopman/parkietentool"} className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaGithub className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md">
            <Link to={"/project/2"} className="w-full aspect-video">
            <img
            src={airbnbPic}
            alt="Image"
            className=""
            data-animation="fade_in"
          />
            </Link>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <Link to={"/project/2"} className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
              Airbnb Clone (Fullstack MERN project)
              </Link>
              <Link to={"https://github.com/RhannaCoopman/AirbnbClone"} className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaGithub className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </Link>
            </div>
          </div>

                    {/* Project 3 */}
                    <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <Link to={"/project/3"} className="w-full aspect-video">
            {/* <video width="1000" height="700" controls autoPlay>
                <source src={parkietvideo} type="video/mp4" />
              </video> */}
            </Link>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <Link to={"/project/3"} className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
              Real Estate Website (Fullstack MERN project) (WIP)
              </Link>
              <Link to={"https://github.com/RhannaCoopman/AirbnbClone"} className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaGithub className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          {/* <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">

            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div> */}

          {/* Project 4 */}
          {/* <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">

            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About me section */}
      <section id="about" className="py-12 px-20">
        <h1 className="">About me</h1>

        <div className="grid grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-24">
          <div data-animation='fade-in' className="text-light-purple-3 dark:text-dark-purple-3 col-span-full md:col-span-2 lg:col-span-1 m-auto">
            Hi! I'm Rhanna and I'm a web development student at Artevelde Hogeschool. My hobbies are fitness and going on walks, coding and food (cooking, eating, looking up recipes...). 
          </div>

          <div className="col-span-full md:col-span-1 lg:col-span-1 aspect-square overflow-hidden m-auto">
            <img
            src={profilePic}            
            alt="Image"
            className="m-auto"
            />
          </div>
        </div>
      </section>

      {/* Internship section */}
      <section id="internship" className="py-12 px-20">
        <h1 className="">Internship</h1>

        <div className="grid grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-24">
          <div className="col-span-full md:col-span-1 lg:col-span-1 aspect-square overflow-hidden m-auto">
            <img
            src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
            alt="Image"
            className="m-auto"
            />
          </div>

          <div className="text-light-purple-3 dark:text-dark-purple-3 col-span-full md:col-span-2 lg:col-span-1 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            turpis elementum, blandit nisl sed, interdum eros. In ut imperdiet
            velit, pulvinar varius risus. Pellentesque eu risus vel dui
            venenatis dapibus. Aenean varius eleifend lorem a congue. Vivamus
            tempor a ipsum vitae bibendum. Sed a eros ante. Integer nibh massa,
            faucibus quis efficitur quis, maximus id nunc. Integer fermentum,
            justo dictum volutpat tincidunt, arcu nibh facilisis arcu, sed
            posuere ante enim ut nulla. Donec et velit consectetur, sodales erat
            et, viverra diam. Vestibulum facilisis augue sit amet justo
            malesuada auctor. Donec et lacinia neque, non ornare sem. Curabitur
            ultricies, justo eget lobortis tristique, ligula augue molestie
            ligula, sit amet blandit quam nisi sed purus. Duis dictum magna
            sapien, in tempor ex fringilla sit amet. Nam viverra a orci ut
            volutpat.
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-12 px-20">
        <h1 className="">Contact me</h1>

        <div className="grid grid-rows-3 gap-6">
          <div className="flex gap-10 items-center">
            <BsTelephone className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <p className="break-words text-light-purple-3 dark:text-dark-purple-3">+32 479 498 223</p>
          </div>

          <div className="flex gap-10 items-center">
            <HiOutlineMail className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <p className="break-words text-light-purple-3 dark:text-dark-purple-3">rhanna.coopman<wbr></wbr>@hotmail.com</p>
          </div>

          <div className="flex gap-10 items-center">
            <BsLinkedin className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <Link to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"} className="break-words text-light-purple-3 dark:text-dark-purple-3">https://www.linkedin.com/in/rhanna-coopman-4589991bb/</Link>
          </div>

        </div>
      </section>
    </main>
    </>

  );
};

export default Home;
