import React from "react";

// Icons imports
import { FaBeer } from "react-icons/fa";
import Nav from "../../Components/Nav";

const Home = () => {
  return (
    <>
    < Nav />
    <main className="bg-light-purple-1 box-border dark:bg-dark-purple-1">
      {/* Hero section */}
      <section className="h-screen w-screen flex flex-col sm:flex-row justify-center items-center py-8">
        {/* Left Side */}
        <div className="w-full text-center sm:text-left sm:w-1/2 px-8 md:px-20">
          <h2 className="text-2xl font-semibold text-light-purple-2 dark:text-dark-purple-2">Rhanna Coopman</h2>
          <h1 className="">
            <span className="text-light-darkgreen dark:text-dark-darkgreen dark:text-dark-darkgreen">Fullstack</span> webdeveloper with a passion for <span className="text-light-darkgreen dark:text-dark-darkgreen dark:text-dark-darkgreen">backend</span>.
          </h1>
          <p className="text-md text-light-purple-2 dark:text-dark-purple-2">Currently looking for an internship</p>
          <div className="m-6 sm:mx-0 grid grid-cols-2 gap-2 pr-8">
            <button className="primary">
              Button 1
            </button>
            <button className="secundairy">
              Button 2
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/2 px-8 md:px-20 xl:max-h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
            alt="Image"
            className="m-auto"
          />
        </div>
      </section>

      {/* Skills section */}
      <section className="py-12 px-20">
        <h1 className="">
          Programming Languages and Frameworks
        </h1>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Box 1 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Box 4 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Box 6 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Box 7 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Box 8 */}
          <div className="bg-light-purple-4 dark:bg-dark-purple-4 rounded-sm shadow-md p-4">
            <div className="flex justify-center items-center gap-4">
              <FaBeer className="text-2xl mt-3 text-light-darkgreen dark:text-dark-darkgreen" />
              <h3 className="text-lg font-semibold mt-4 text-light-darkgreen dark:text-dark-darkgreen">
                Language/Framework 1
              </h3>
            </div>
            <p className="mt-2 text-center text-light-purple-3 dark:text-dark-purple-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Project section */}
      <section className="py-12 px-20">
        <h1 className="">
          Programming Languages and Frameworks
        </h1>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Project 1 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">
              {/* <img
                src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
                alt="Image"
                className=""
              /> */}
            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">
              {/* <img
                src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
                alt="Image"
                className=""
              /> */}
            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">
              {/* <img
                src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
                alt="Image"
                className=""
              /> */}
            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-light-purple-5 dark:dark-purple-5 rounded-sm shadow-md overflow-hidden">
            <div className="w-full aspect-video">
              {/* <img
                src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
                alt="Image"
                className=""
              /> */}
            </div>
            <div className="grid grid-cols-4 px-8 py-4 h-auto">
              <h3 className="col-span-3 text-sm font-semibold text-light-purple-1 dark:text-dark-purple-2">
                Full stack MERN Project With custom Hooks and Middleware
              </h3>
              <div className="col-span-1 flex gap-8 justify-end items-center h-auto">
                <FaBeer className="text-light-lightgreen dark:text-dark-lightgreen hover:cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About me section */}
      <section className="py-12 px-20">
        <h1 className="">About me</h1>

        <div className="grid grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-24">
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

          <div className="col-span-full md:col-span-1 lg:col-span-1 aspect-square overflow-hidden m-auto">
            <img
            src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
            alt="Image"
            className="m-auto"
            />
          </div>
        </div>
      </section>

      {/* Internship section */}
      <section className="py-12 px-20">
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
      <section className="py-12 px-20">
        <h1 className="">Contact me</h1>

        <div className="grid grid-rows-3 gap-6">
          <div className="flex gap-10 items-center">
            <FaBeer className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <p className="text-light-purple-3 dark:text-dark-purple-3">+32 000 000 000</p>
          </div>

          <div className="flex gap-10 items-center">
            <FaBeer className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <p className="text-light-purple-3 dark:text-dark-purple-3">rhanna.coopman@hotmail.com</p>
          </div>

          <div className="flex gap-10 items-center">
            <FaBeer className="text-light-darkgreen dark:text-dark-darkgreen text-2xl"/>
            <p className="text-light-purple-3 dark:text-dark-purple-3">https://www.linkedin.com/in/rhanna-coopman-4589991bb/</p>
          </div>

        </div>
      </section>
    </main>
    </>

  );
};

export default Home;
