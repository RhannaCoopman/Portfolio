import React from "react";
import Nav from "../../Components/Nav";

const Project3 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 box-border dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">
            Airbnb clone (Fullstack MERN)
          </h1>

          <div className="">
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              This project is a MERN stack Airbnb clone. 
            </div>

            <div className="aspect-video overflow-hidden m-auto my-8">
              <img
                src="https://images.unsplash.com/photo-1571176027089-ef2446033c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" // Replace with your image URL
                alt="Image"
                className="m-auto"
              />
            </div>

            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              In this Airbnb clone, you can login, add, edit and  buildings
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Login
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              You can register, login and logout. The authentication uses Jsonwebtoken. Users are saved in the MongoDB database with an encrypt password. 
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              CRUD
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              Each logged in user can add buildings, including images that can be uploaded from the pc or with a link. You can edit and delete the buildings.  
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project3;
