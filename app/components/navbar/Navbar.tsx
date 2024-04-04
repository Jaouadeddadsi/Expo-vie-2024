"use client";

import useSideBar from "@/app/hooks/useSideBar";
import Container from "../Container";
import MenuItem from "./MenuItem";
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);
  const sideBar = useSideBar();
  const route = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
      fixed 
      z-10 
      shadow-sm 
      w-full
      ${showBackground ? "bg-neutral-600/70" : "bg-transparent"} 
    `}
    >
      <div className="py-4">
        <Container>
          <div
            className="
          flex
          flex-row
          justify-end
          md:justify-center
          items-center
          gap-2
          lg:gap-4
        "
          >
            <MenuItem
              label="Accueil"
              path="/"
              onClick={() => {
                route.push("/");
              }}
            />
            <MenuItem
              label="galerie"
              path="/galerie"
              onClick={() => {
                route.push("/galerie");
              }}
            />
            <MenuItem
              label="comite"
              path="/comite"
              onClick={() => {
                route.push("/comite");
              }}
            />
            <MenuItem
              label="Ouverture"
              path="/ouverture"
              onClick={() => {
                route.push("/ouverture");
              }}
            />
            <MenuItem
              label="presse"
              path="/presse"
              onClick={() => {
                route.push("/presse");
              }}
            />
            <MenuItem
              label="contact"
              path="/contact"
              onClick={() => {
                route.push("/contact");
              }}
            />
            <SlMenu
              onClick={sideBar.onOpen}
              size={24}
              className="
                md:hidden
                fill-white
                cursor-pointer
                sm:me-4
              "
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
