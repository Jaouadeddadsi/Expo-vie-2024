"use client";

import AvatarCard from "../components/AvatarCard";
import Container from "../components/Container";
import CopyRight from "../components/CopyRight";
import Header from "../components/Header";
import comite from "../data/comite";

const ComitePage = () => {
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
                {comite.map((avatar) => (
                  <AvatarCard key={avatar.name} {...avatar} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CopyRight color="#D77042" />
    </>
  );
};

export default ComitePage;
