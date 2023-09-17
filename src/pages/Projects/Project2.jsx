import React from "react";
import Nav from "../../Components/Nav";
import pic from "../../Images/Schermafbeelding 2023-09-14 om 21.16.56.png";
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 box-border dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">Airbnb clone (Fullstack MERN)</h1>

          <div className="">
            <Link
              className="secundairy"
              to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"}
            >
              Github
            </Link>

            <div className="aspect-video overflow-hidden m-auto my-8">
              <img src={pic} alt="Screenshot of project" className="m-auto" />
            </div>

            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              This project is a fullstack MERN project and is a clone of the
              Airbnb site. It was build following the Youtube-video Build a
              Fullstack Booking App using MERN of Coding with Dawid. You can
              login and register, add, create and delete your own buildings,
              browse through all the buildings and book a building and you can
              look at the bookings people made on your buildings.{" "}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project2;
