"use client";

import Container from "../components/Container";
import CopyRight from "../components/CopyRight";
import Header from "../components/Header";
import CeremonieGallery from "../components/gallery/CeremonieGallery";
import HomeGallery from "../components/gallery/HomeGallery";

const OuverturePage = () => {
  return (
    <>
      {/* header */}
      <Header subtitle="Cérémonie d'ouverture" />
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
              Bienvenue dans la galerie exclusive de la cérémonie d'ouverture !
              Plongez-vous dans l'éclat et la grandeur de cet événement
              inoubliable en explorant nos magnifiques photographies. Chaque
              cliché capturé offre un instantané saisissant des moments les plus
              mémorables de la soirée, des performances éblouissantes aux
              discours inspirants. Que vous ayez assisté à l'événement en
              personne ou que vous souhaitiez revivre ses moments forts, notre
              collection de photos est votre fenêtre virtuelle vers l'émotion et
              la splendeur de cette soirée spéciale.
            </div>
          </div>
          <div
            className="
              py-8
              md:py-16
            "
          >
            <CeremonieGallery />
          </div>
        </Container>
      </div>
      <CopyRight color="#D77042" />
    </>
  );
};

export default OuverturePage;
