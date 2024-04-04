"use client";
import { FaRegCopyright } from "react-icons/fa";

interface CopyRightProps {
  color: string;
}

const CopyRight: React.FC<CopyRightProps> = ({ color }) => {
  return (
    <section
      className={`
        w-full
        bg-[${color}]
        py-4
        flex
        justify-center
        items-center
        gap-2
        `}
    >
      <FaRegCopyright className="text-white" />
      <p className="text-white text-base">Tous droits réservés 2024</p>
    </section>
  );
};

export default CopyRight;
