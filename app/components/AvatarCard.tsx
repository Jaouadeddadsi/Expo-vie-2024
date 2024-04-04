"use client";

import Image from "next/image";

interface AvatarCardProps {
  imgeSrc: string;
  name: string;
  position: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ imgeSrc, name, position }) => {
  return (
    <div
      className="
      bg-white
      w-[340px]
      h-[440px]
      rounded-sm
      group
      py-[14px]
      px-[15px]
      overflow-hidden
      flex
      flex-col
      gap-3
    "
    >
      <div className="overflow-hidden">
        <Image
          alt=""
          src={imgeSrc}
          width={325}
          height={338}
          className="
          group-hover:opacity-80
          transition
          ease-in
          duration-300
          group-hover:scale-110
        "
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="text-center font-bold">{name}</div>
        <div className="text-center text-xs">{position}</div>
      </div>
    </div>
  );
};

export default AvatarCard;
