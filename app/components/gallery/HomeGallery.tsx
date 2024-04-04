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

import photos from "@/app/data/photos";
import NextJsImage from "./NextJsImage";

const HomeGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1500}
        sizes={{ size: "calc(100vw - 240px)" }}
        targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom, Download]}
      />
    </>
  );
};

export default HomeGallery;
