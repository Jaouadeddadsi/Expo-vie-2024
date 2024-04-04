"use client";

import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  path: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, path, onClick }) => {
  const pathname = usePathname();

  return (
    <button
      onClick={onClick}
      className={`
      cursor-pointer
      text-nowrap
      text-white
      text-base
      uppercase
      py-1
      px-2
      lg:px-4
      rounded-md
      transition
      hover:font-bold
      hover:tracking-wide
      hidden
      md:block
      ${pathname === path ? "hover:bg-orange-600" : "hover:bg-orange-600/80"}
      ${pathname === path ? "font-bold" : "font-medium"}
      ${pathname === path ? "bg-orange-600" : "bg-transparent"}
      ${pathname === path ? "tracking-wide" : "tracking-normal"}
      `}
    >
      {label}
    </button>
  );
};

export default MenuItem;
