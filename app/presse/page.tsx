"use client";

import AvatarCard from "../components/AvatarCard";
import Container from "../components/Container";
import CopyRight from "../components/CopyRight";
import Header from "../components/Header";
import PressCard from "../components/PressCard";
import comite from "../data/comite";

const PressePage = () => {
  return (
    <>
      {/* header */}
      <Header
        title="Comité d’honneur"
        subtitle="Accompagnement distingué par des"
        subSubtitle="personnalités éminentes."
      />
      <div
        className="
        bg-[#171E21]
        opacity-95
        py-8
        md:py-16
      "
      >
        <Container>
          <div className="flex w-full justify-center">
            <div
              className="
                max-w-[812px]
                text-base
                md:leading-8
                text-[#F1FAFF]
                text-center
              "
            >
              Brefs biographies et photos du comité d'organisation, mettant en
              évidence leur expertise et leur engagement pour le succès de
              l'expo. Inclure les coordonnées de chaque membre du comité.
            </div>
          </div>
          <div
            className="
              py-8
              md:py-16
            "
          >
            <div className="w-full flex justify-center">
              <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-4
                md:gap-8

              "
              >
                <PressCard
                  imgeSrc="https://res.cloudinary.com/dvct0ej2a/image/upload/v1708510782/Rectangle_54_nxcab3.png"
                  title="L’AFRIQUE: BERCEAU DES ORIGINES DE LA VIE"
                  subtitle="Le 06 Février 2024 | Nome magasine"
                  url="https://www.cite-sciences.fr/fr/au-programme/expos-permanentes/les-expositions/bio-inspiree/lexposition/les-fonctionnements-de-la-vie"
                />
                <PressCard
                  imgeSrc="https://res.cloudinary.com/dvct0ej2a/image/upload/v1708510782/Rectangle_54_nxcab3.png"
                  title="L’AFRIQUE: BERCEAU DES ORIGINES DE LA VIE"
                  subtitle="Le 06 Février 2024 | Nome magasine"
                  url="https://www.cite-sciences.fr/fr/au-programme/expos-permanentes/les-expositions/bio-inspiree/lexposition/les-fonctionnements-de-la-vie"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CopyRight color="#D77042" />
    </>
  );
};

export default PressePage;
