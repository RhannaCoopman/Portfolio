import React from "react";
import Nav from "../../Components/Nav";
import video from "../../Videos/parkietentool-video_EcCIjStN.mp4";

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
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              This project is build using Laravel 10 and SQL. I also used ...
              for authentication, Mollie for payments, ngrok for ... and some
              bootstrap.
            </div>

            <div className="aspect-video overflow-hidden m-auto my-4">
              <video width="1000" height="700" controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div>

            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              The purpose of this application is to buy rings for birds, with a
              dashboard for the admin. When an user buys rings, each ring should
              be assigned a unique number and they should be able to make a
              payment online.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Dashboard
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              The dashboard is only reachable for the admins. In the dashboard,
              the admin has full CRUD over the users, rings and orders. The
              admin can filter and sort orders, and export them to pdf and
              excel.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Automaticly generate ring number
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              Each ring needs to have a unique number. This number exists out of
              the landcode .... So to compose this unique number
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project1;
