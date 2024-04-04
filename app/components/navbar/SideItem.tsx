"use client";

import { usePathname } from "next/navigation";

interface SideItemProps {
  label: string;
  path: string;
  onClick: () => void;
}

const SideItem: React.FC<SideItemProps> = ({ label, path, onClick }) => {
  const pathname = usePathname();

  return (
    <button
      onClick={onClick}
      className={`
      text-left
      cursor-pointer
      text-nowrap
      uppercase
      py-4
      px-6
      transition
      hover:font-bold
      hover:text-orange-600
      hover:tracking-wide
      ${pathname === path ? "hover:bg-neutral-200" : "hover:bg-neutral-200/70"}
      ${pathname === path ? "font-bold" : "font-medium"}
      ${pathname === path ? "text-orange-600" : "text-black"}
      ${pathname === path ? "bg-neutral-200" : "bg-transparent"}
      ${pathname === path ? "tracking-wide" : "tracking-normal"}
      `}
    >
      {label}
    </button>
  );
};

export default SideItem;
