"use client";

import { MdClose } from "react-icons/md";
import SideItem from "./SideItem";
import useSideBar from "@/app/hooks/useSideBar";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const sideBar = useSideBar();
  const router = useRouter();

  if (sideBar.isOpen) {
    return (
      <div
        className="
        block
        md:hidden
        fixed
        inset-y-0
        right-0
        w-full
        sm:w-[400px]
        bg-white
        z-20
        "
      >
        <div className="p-6">
          <MdClose
            onClick={sideBar.onClose}
            size={30}
            className="
              fill-black
              cursor-pointer
            "
          />
        </div>
        <div
          className="
              w-full
              flex
              flex-col
              gap-4
            "
        >
          <SideItem
            label="Accueil"
            path="/"
            onClick={() => {
              router.push("/");
              sideBar.onClose();
            }}
          />
          <SideItem
            label="galerie"
            path="/galerie"
            onClick={() => {
              router.push("/galerie");
              sideBar.onClose();
            }}
          />
          <SideItem
            label="comite"
            path="/comite"
            onClick={() => {
              router.push("/comite");
              sideBar.onClose();
            }}
          />
          <SideItem
            label="Ouverture"
            path="/ouverture"
            onClick={() => {
              router.push("/ouverture");
              sideBar.onClose();
            }}
          />
          <SideItem
            label="presse"
            path="/presse"
            onClick={() => {
              router.push("/presse");
              sideBar.onClose();
            }}
          />
          <SideItem
            label="contact"
            path="/contact"
            onClick={() => {
              router.push("/contact");
              sideBar.onClose();
            }}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default Sidebar;
