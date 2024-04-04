"use client";

import Container from "../components/Container";
import CopyRight from "../components/CopyRight";
import Header from "../components/Header";
import HomeGallery from "../components/gallery/HomeGallery";

const GaleriePage = () => {
  return (
    <>
      <Header subtitle="Galerie" />
      <div
        className="
        bg-[#171E21]
        opacity-95
        py-8
        md:py-16
      "
      >
        <Container>
          <HomeGallery />
        </Container>
      </div>
      <CopyRight color="#D77042" />
    </>
  );
};

export default GaleriePage;
