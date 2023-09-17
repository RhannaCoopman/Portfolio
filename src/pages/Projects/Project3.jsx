import React from "react";
import Nav from "../../Components/Nav";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 box-border dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">
            Fullstack MERN Real Estate Website
          </h1>

          <div className="">
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto mb-8">
              This project is a work in progress. It will become a real estate website made in the MERN-stack (MongoDB, Express, React and Node.js). It will have self-written authentication, authentication and userroles, custom middleware, hooks and contexts, styled with tailwind CSS, picture uploading and form validation ...
            </div>

            <Link className="secundairy mt-8" to={"https://github.com/RhannaCoopman/RealEstateSite"}>
              Github
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project3;
