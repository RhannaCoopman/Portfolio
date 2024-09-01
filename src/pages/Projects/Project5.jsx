import React from "react";
import Nav from "../../Components/Nav";
import video from "../../Videos/parkietentool-video_EcCIjStN.mp4";
import { Link } from "react-router-dom";

const Project5 = () => {
  return (
    <>
      <Nav />
      <main className="box-border min-h-screen bg-light-purple-1 dark:bg-dark-purple-1">
        <section className="py-12 px-20">
          <h1 className="mt-8">
            Afstudeerproject: Social media-app om kostuums voor vrouwen te kopen
          </h1>

          <div className="">
            <div className="text-light-purple-3 dark:text-dark-purple-3 m-auto mb-8">
              Het doel van de web-app is om te inspireren, te helpen bij het vinden van plekken waar je
              kostuums kunt kopen, en om contact te leggen met de community. De
              app bestaat enerzijds uit een gepersonaliseerde feed, die wordt
              samengesteld op basis van de posts die de gebruiker liket, opslaat, en bekijkt.
              Daarnaast krijg je aanbevelingen voor gebruikers die een
              gelijkaardige stijl hebben, gebaseerd op wat jij hebt geliket en
              wat de andere gebruiker heeft geliket. Ten slotte kun je ook zelf
              posts maken met een afbeelding van je outfit, en kun je per
              kledingstuk annotaties toevoegen waarmee je kunt aangeven waar jij
              het gekocht hebt, zodat anderen dit ook kunnen kopen.
            </div>

            <Link
              className="primary w-full mt-8"
              to={"https://github.com/RhannaCoopman/Costumes"}
            >
              GitHub
            </Link>
{/* 
            <div className="aspect-video overflow-hidden m-auto my-4">
              <video width="" height="" controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div> */}

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Feed
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              De feed wordt gepersonaliseerd op basis van wat de gebruiker heeft geliket,
              opgeslagen en bekeken. De tags van de post worden
              bijgehouden, samen met een score van hoe vaak een gebruiker
              interactie heeft gehad met die tag.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Annotaties
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              De annotaties zijn de infobolletjes bij de posts. De maker van
              de post kan hier informatie geven over waar elk onderdeel van de outfit
              is gekocht, zodat andere gebruikers geïnspireerd kunnen raken en
              deze kledingstukken ook kunnen kopen. Bij het maken van de post
              kan er gebruik worden gemaakt van scraping. Dit betekent dat de maker
              de URL naar de webshop kan plakken, waarna de metadata van de
              webshop wordt gescraped en automatisch wordt ingevuld. De locatie
              van de annotaties wordt bepaald op basis van waar de gebruiker op de
              afbeelding klikt, en deze locatie wordt dan ook opgeslagen in de
              database om later op de juiste plek te worden getoond.
            </p>

            <h2 className="mb-4 mt-8 font-semibold text-light-darkgreen dark:text-dark-lightgreen">
              Chat & Community
            </h2>
            <p className="text-light-purple-3 dark:text-dark-purple-3 m-auto">
              Een belangrijk onderdeel van het project was de community. Je krijgt
              een lijst met aanbevolen gebruikers, gebaseerd op de tags waar jij
              en de andere gebruiker interactie mee hebben gehad. Er wordt ook
              rekening gehouden met de interesses die jij en de gebruiker delen,
              zoals meet-ups, advies geven, of gewoon chatten. Je kunt een chat
              starten met de gebruiker, en de chat werkt met sockets zodat je
              kunt zien wanneer de andere gebruiker typt en nieuwe berichten meteen
              zichtbaar zijn zonder te hoeven refreshen.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project5;
