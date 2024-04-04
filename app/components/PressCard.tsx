"use client";

import Image from "next/image";

interface PressCardProps {
  imgeSrc: string;
  title: string;
  subtitle: string;
  url: string;
}

const PressCard: React.FC<PressCardProps> = ({
  imgeSrc,
  title,
  subtitle,
  url,
}) => {
  return (
    <div
      className="
      bg-white
      w-[340px]
      h-[370px]
      rounded-sm
      group
      py-[14px]
      px-[15px]
      overflow-hidden
      flex
      flex-col
      gap-3
      relative
    "
    >
      <div className="overflow-hidden">
        <Image
          alt=""
          src={imgeSrc}
          width={310}
          height={200}
          className="
          group-hover:opacity-80
          transition
          ease-in
          duration-300
          group-hover:scale-110
        "
        />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <div
          className="
          text-sm
          text-[#3E909D80]
        "
        >
          {subtitle}
        </div>
        <div
          className="
          text-base
          font-bold
          font-playfair
          text-[#1E1E1E]
        "
        >
          {title}
        </div>
      </div>
      <div className="absolute bottom-[15px] left-[15px]">
        <a
          target="_blank"
          href={url}
          className="
            inline-block
            shadow-sm
            p-3
            text-[#3E909D]
            text-[10px]
            uppercase
            hover:shadow-md
            bg-neutral-100
            rounded-md
            hover:bg-neutral-200
            transition
          "
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default PressCard;
