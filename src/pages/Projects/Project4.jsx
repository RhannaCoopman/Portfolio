import React from "react";
import Nav from "../../Components/Nav";

const Project4 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">AI Chatbot in WhatsApp</h1>

          <div className="">
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto mb-8">
              Dit project heb ik gemaakt voor Kriski Skivakanties tijdens mijn
              vakantiejob bij Endare. Het project bestaat uit drie onderdelen:
              een AI-chatbot, integratie met WhatsApp, en het omzetten van de oude 
              Node.js back-end naar Laravel.
            </div>

            {/* <div className="aspect-video overflow-hidden m-auto my-4">
              <video width="" height="" controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div> */}

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              AI Chatbot
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              De AI-chatbot heb ik in Python geschreven. Hiervoor wordt de data uit
              de SQL-database geherstructureerd, embedded en in een vector-database
              geplaatst. Aan de hand van de gestelde vraag worden de juiste
              embeddings opgehaald en wordt er een antwoord geformuleerd.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Laravel Back-End
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              De back-end is in Laravel geschreven. <br />
              Een belangrijk onderdeel van de back-end is de integratie met
              WhatsApp. Gebruikers kunnen hun vraag sturen naar het
              WhatsApp-nummer van Kriski, waarna de back-end deze via een webhook
              binnenkrijgt. De gebruiker en zijn reizen worden opgehaald, en deze info
              wordt samen met de vraag verwerkt door de AI-chatbot, waarna het
              antwoord aan de gebruiker wordt gegeven. <br />
              Een gebruiker kan ook foto's en video's van zijn reis sturen,
              waarna deze automatisch bij de juiste reis in Flickr worden geüpload. <br />
              Ten slotte heb ik ook de oude Node.js-server omgezet naar Laravel-API's
              en beveiligd, waardoor de volledige back-end nu vervangen is door Laravel.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Project
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              Ik heb zelf een groot deel van het project gepland met user
              stories en sprints. Daarnaast heb ik contact onderhouden met de klant en
              regelmatig meetings gehad met de klant.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project4;
