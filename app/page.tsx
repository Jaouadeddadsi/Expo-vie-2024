"use client";

import Image from "next/image";
import Button from "./components/Button";
import Container from "./components/Container";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { TbClockHour3 } from "react-icons/tb";
import HomeGallery from "./components/gallery/HomeGallery";
import SponsorCarasoul from "./components/carasoul/SponsorCarasoul";
import CopyRight from "./components/CopyRight";
import Contact from "./components/contact/Contact";
import VideoPlay from "./components/VideoPlay";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div
        className="
        bg-local
        bg-origin-content
        bg-bottom
        bg-no-repeat
        bg-cover
        bg-2xl
      "
      >
        <Container>
          {/* langing page */}
          <div
            className="
          w-full
          h-auto
          md:h-screen
          flex
          justify-center
          items-center
      "
          >
            <div
              className="
                  mt-16
                  mb-12
                  md:mb-0
                  md:h-[80%] 
                  w-full 
                  flex 
                  flex-col 
                  items-center
                  gap-12
                  md:gap-0 
                  md:justify-around
                  "
            >
              <div
                className="
              flex
              flex-col
              gap-12
              md:gap-8
            "
              >
                <div
                  className="
                  flex
                  flex-col
                  gap-0.5
                  md:gap-4
                  items-center
                  text-[#F1FAFF]
                  text-2xl
                  md:text-5xl
                  font-bold
                  text-center
                  font-playfair
                "
                >
                  <div>Expo Origines de la Vie 2024</div>
                  <div>Le riche patrimoine de l&apos;Afrique</div>
                </div>
                <div
                  className="
                  text-center
                  py-2
                  px-3
                  md:py-4
                  md:px-16
                  bg-[#171E21]
                  opacity-75
                  text-[#F1FAFF]
                  font-normal
                  text-base
                  md:text-2xl
                "
                >
                  <div>PREMIERE EXPOSITION INTERNATIONALE</div>
                  <div>DU PATRIMOINE FOSSILE</div>
                </div>
              </div>
              {/* second block */}
              <div
                className="
                w-full
                flex
                flex-col
                md:flex-row
                md:justify-around
                gap-12
                md:gap-0
              "
              >
                <div
                  className="
                  flex
                  flex-col
                  items-center
                  md:items-start
                  gap-1
                  md:gap-4
                "
                >
                  <VideoPlay />
                  <div
                    className="
                    max-w-[400px]
                    text-[#FFF5EA]
                    text-base
                    md:text-2xl
                    uppercase
                    md:leading-8
                    text-center
                    md:text-start
                  "
                  >
                    Partez à la découverte de l&apos;exposition.
                  </div>
                </div>
                <div
                  className="
                  flex
                  flex-col
                  items-center
                  md:items-end
                  gap-1
                  md:gap-4
                "
                >
                  <Button label="REGARDEZ Les photos" onClick={() => {}} />
                  <div
                    className="
                    max-w-[400px]
                    text-[#FFF5EA]
                    text-base
                    md:text-2xl
                    uppercase
                    md:leading-8
                    text-center
                    md:text-end
                  "
                  >
                    Visionner les photos de la cérémonie d&apos;ouverture.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* about us */}
      <section
        className="
        bg-[#171E21]
        pb-6
        md:pb-0
      "
      >
        <div
          className="
            max-w-[2520px]
            mx-auto
            2xl:px-40
            xl:px-20
            md:px-10
            sm:px-2
            px-4
          "
        >
          <div
            className="
                  flex
                  flex-col
                  md:flex-row
                "
          >
            <div className="md:basis-1/2 md:self-stretch">
              <div
                className="
                py-8
                md:py-28
              "
              >
                <h2
                  className="
                  text-[#1BB6C4]
                  text-2xl
                "
                >
                  À propos de nous
                </h2>
                <hr
                  className="
                  mt-4
                  md:mt-12
                  w-[80%]
                  border-[#1BB6C4]
                "
                />
                <div
                  className="
                  text-[#FFF5EA]
                  text-base
                  leading-[30px]
                  text-start
                  mt-6
                  md:mt-14
                "
                >
                  Bienvenue à l&apos;Expo Origines de la Vie 2024, organisée par
                  la Bibliothèque Nationale du Royaume du Maroc à Rabat.
                  Explorez le fascinant voyage de l&apos;Afrique en tant que
                  berceau de la vie sur Terre. Rejoignez-nous du 6 février au 10
                  mars 2024, alors que nous dévoilons les trésors géologiques et
                  biologiques qui font de l&apos;Afrique une terre unique et
                  ancienne.
                </div>
              </div>
            </div>
            <div className="md:basis-1/2 md:self-stretch relative">
              <div
                className="
                  md:absolute
                  md:right-0
                  md:-top-28
                  py-6
                  px-6
                  md:py-16
                  md:px-14
                  text-[#FFF5EA]
                  bg-[#3E909D]
                "
              >
                <LiaLongArrowAltLeftSolid
                  size={50}
                  className="
                    fill-white
                  "
                />
                <div
                  className="
                    text-2xl
                    font-bold
                    font-playfair
                  "
                >
                  Planifiez votre visite
                </div>
                <div
                  className="
                    flex
                    justify-center
                    items-center
                    mt-8
                  "
                >
                  <Image
                    alt="location"
                    src="/images/location.svg"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-center mt-2">
                  Tous les jours de 10h30min à 18h00min
                </div>
                <hr className="my-8" />
                <div className="flex justify-center">
                  <TbClockHour3 size={40} />
                </div>
                <div className="mt-8 text-center">
                  Bibliothèque nationale du <br /> Royaume - Rabat, Morocco
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mission */}
      <section
        className="
        bg-local
        bg-origin-content
        bg-bottom
        bg-no-repeat
        bg-cover
        bg-mission
      "
      >
        <div
          className="
          w-full
          h-full
          bg-gradient-to-r 
          from-[#D7704200] 
          to-[#D77042B5] 
        "
        >
          <Container>
            <div
              className="
              flex
              flex-col
              md:flex-row
              justify-center
              md:justify-between
              md:items-center
              gap-4
              md:gap-8
              2xl:gap-14
              py-8
              md:py-24
              text-[#FFF5EA]
            "
            >
              <div
                className="
                text-xl
                md:text-4xl
                font-playfair
                font-bold
              "
              >
                <span className="bg-[#D77042] inline-block mb-1 py-1 px-2">
                  L&apos;AFRIQUE:
                </span>{" "}
                <br />
                <span className="bg-[#D77042] inline-block mb-1 py-1 px-2">
                  BERCEAU DES ORIGINES
                </span>{" "}
                <br />
                <span className="bg-[#D77042] inline-block py-1 px-2">
                  DE LA VIE
                </span>
              </div>
              <div
                className="
                max-w-[670px]
                leading-7
                md:leading-8
              "
              >
                Notre mission est de célébrer et de préserver le remarquable
                patrimoine fossilifère de l&apos;Afrique, en soulignant son rôle
                pivot dans l&apos;origine de la vie et la formation de la Terre.
                Cette exposition innovante vise à connecter les gens avec
                l&apos;histoire riche de notre planète, en offrant une
                plateforme pour l&apos;éducation, la sensibilisation et la
                collaboration internationale.
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* diverse fossil */}
      <section
        className="
          bg-[#171E21]
        "
      >
        <Container>
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:justify-between
              items-center
              gap-4
              md:gap-8
              2xl:gap-14
              py-8
              md:py-16
            "
          >
            <div>
              <Image
                alt="fossil"
                src="/images/fossil.png"
                width={471}
                height={466}
                className="
                  w-full
                  h-auto
                "
              />
            </div>
            <div
              className="
                bg-white
                px-10
                py-10
                max-w-[600px]
              "
            >
              <div className="flex gap-2 items-center">
                <div
                  className="
                    w-[38px]
                    h-[38px]
                    rounded-sm
                    bg-[#3E909D]
                    flex
                    justify-center
                    items-center
                  "
                >
                  <Image
                    alt="logo"
                    src="/images/fossile-logo.svg"
                    width={22}
                    height={21}
                  />
                </div>
                <div
                  className="
                      text-base 
                      text-[#313638]
                      font-bold
                      uppercase
                      "
                >
                  Diverse Fossil Exhibits
                </div>
              </div>
              <div className="mt-6 text-black text-base leading-8">
                Embark on an exhilarating adventure through time at the Origins
                of Life Expo 2024, where our diverse fossil exhibits invite you
                to witness the incredible tapestry of ancient life.
              </div>
              <div className="w-full flex justify-end">
                <VideoPlay small />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* gallery */}
      <section className="bg-[#F1FAFF] py-8 md:py-16">
        <Container>
          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-4
              md:gap-8
            "
          >
            <div className="text-[#313638] md:basis-3/4 order-2 md:order-1">
              <h2
                className="
                  text-xl
                  md:text-4xl
                  font-playfair
                  font-bold
                "
              >
                Voyage à travers le temps: <br /> Fossiles captivants et
                merveilles géologiques
              </h2>
              <p className="text-base md:leading-7 mt-4 md:mt-8">
                Présentez une sélection d'images de haute qualité de
                l'exposition, donnant aux visiteurs un aperçu des diverses et
                captivantes expositions. Vous pouvez les catégoriser par pays ou
                par thème pour faciliter la navigation.
              </p>
            </div>
            <div className="md:basis-1/4 order-1 md:order-2">
              <h3
                className="
                  text-[#1BB6C4]
                  text-xl
                  md:text-2xl
                  uppercase
                "
              >
                Notre galerie
              </h3>
              <hr className="border-[#1BB6C4] mt-4" />
            </div>
          </div>
          {/* gallery */}
          <div
            className="
                w-full
                mt-4
                md:mt-8
              "
          >
            <HomeGallery />
          </div>
        </Container>
      </section>

      {/* sponsors */}
      <section
        className="
        bg-local
        bg-origin-content
        bg-bottom
        bg-no-repeat
        bg-cover
        bg-sponsor
      "
      >
        <div
          className="
          w-full
          h-full
          bg-[#1E1B1A]
          py-8 
          md:py-16
          opacity-80
          "
        >
          <Container>
            <div
              className="
              flex
              flex-col
              md:flex-row
              gap-4
              md:gap-8
            "
            >
              <div className="text-[#D77042] md:basis-3/4 order-2 md:order-1">
                <h2
                  className="
                  text-xl
                  md:text-4xl
                  font-playfair
                  font-bold
                "
                >
                  Sponsors et partenaires :<br />
                  Nourrir les découvertes, valoriser le patrimoine
                </h2>
              </div>
              <div className="md:basis-1/4 order-1 md:order-2">
                <h3
                  className="
                  text-[#1BB6C4]
                  text-xl
                  md:text-2xl
                  uppercase
                "
                >
                  nos sponsors
                </h3>
                <hr className="border-[#1BB6C4] mt-4" />
              </div>
            </div>
            {/* swipper */}
            <div
              className="
                w-full
                mt-8
                md:mt-16
              "
            >
              <SponsorCarasoul />
            </div>
          </Container>
        </div>
      </section>
      {/* contact */}
      <section
        className="
          bg-white
          py-0
          md:py-12
          mx-auto
          xl:px-20
          md:px-10
          px-0
        "
      >
        <Contact />
      </section>
      {/* footer */}
      <CopyRight color="#171E21" />
    </>
  );
}
