"use client";

import Lightbox from "yet-another-react-lightbox";
import { Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

import Button from "./Button";
import { useState } from "react";

interface VideoPlayProps {
  small?: boolean;
}

const VideoPlay: React.FC<VideoPlayProps> = ({ small }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        label="REGARDEZ LA VIDÉO"
        onClick={() => {
          setOpen(true);
        }}
        small={small}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            width: 1280,
            height: 720,
            autoPlay: true,
            controls: true,
            loop: true,
            sources: [
              {
                src: "https://res.cloudinary.com/dufseaibj/video/upload/v1712224978/BigBuckBunny_hu1ou9.mp4",
                type: "video/mp4",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default VideoPlay;
