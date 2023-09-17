import React from "react";
import Nav from "../../Components/Nav";
import video from "../../Videos/parkietentool-video_EcCIjStN.mp4";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 box-border dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">
            Parkietentool (Fullstack Laravel 10 application)
          </h1>

          <div className="">
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto mb-8">
              This project, built using Laravel 10, primarily focuses on backend
              development with less emphasis on frontend design. It was
              undertaken as part of a school assignment, where we received a
              project brief outlining the website's requirements and
              functionality. This encompassed everything from designing the
              database model to implementing the backend features. The purpose
              of the website is to allow members to purchase rings for their
              parakeets. In addition, it also had to have a backend for the
              admin.
            </div>

            <Link
              className="primary w-full mt-8"
              to={"https://www.linkedin.com/in/rhanna-coopman-4589991bb/"}
            >
              Github
            </Link>

            <div className="aspect-video overflow-hidden m-auto my-4">
              <video width="" height="" controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Admin dashboard
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              The admin has full CRUD over the rings, members and orders. The
              admin can also filter and sort orders, and export the filtered
              orders to Excel.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Ordering the rings
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              A member can order rings via the order form on the website. Here
              their profile details are automatically filled in. They can choose
              how many rings of each type to order and the price will be
              calculated and displayed below with Javascript. They can then
              choose how they want to pay. If they choose to pay online, they
              will be redirected to Mollie's payment page. Once the order has
              been placed, the codes of their ordered rings are automatically
              calculated. The code is composed of the club name, the id of the
              member, the size of the ring, the country, the current year and
              the umptheent number of that ring. But the rings are made out of
              two materials with the same size, so if they order rings in both
              materials, the umptheent number of the second material should
              continue counting, otherwise you have rings with the exactly same
              number.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project1;
