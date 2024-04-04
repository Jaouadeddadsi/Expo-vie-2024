"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import {
  Fullscreen,
  Slideshow,
  Zoom,
  Download,
} from "yet-another-react-lightbox/plugins";

import photosCeremo from "@/app/data/photosCeremo";
import NextJsImage from "./NextJsImage";

const CeremonieGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photosCeremo}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1500}
        sizes={{ size: "calc(100vw - 240px)" }}
        // targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photosCeremo}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom, Download]}
      />
    </>
  );
};

export default CeremonieGallery;
