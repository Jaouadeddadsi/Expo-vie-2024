"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const sponsors = [
  {
    id: "lp9ef5",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/sponsor-1_lp9ef5.png",
  },
  {
    id: "pfli3g",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/sponsor-2_pfli3g.png",
  },
  {
    id: "zvnmje",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/sponsor-3_zvnmje.png",
  },
  {
    id: "yjocbx",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/sponsor-4_yjocbx.png",
  },
  {
    id: "bsjssi",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/sponsor-5_bsjssi.png",
  },
  {
    id: "vplfsq",
    src: "https://res.cloudinary.com/dvct0ej2a/image/upload/v1708249681/expo-vie/spnsor-6_vplfsq.png",
  },
];

const SponsorCarasoul = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      centeredSlides={false}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
        1536: {
          slidesPerView: 7,
        },
      }}
      scrollbar={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {sponsors.map((sponsor) => {
        return (
          <SwiperSlide className="w-full flex justify-end" key={sponsor.id}>
            <img
              alt=""
              src={sponsor.src}
              width={167}
              height={129}
              loading="lazy"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SponsorCarasoul;
