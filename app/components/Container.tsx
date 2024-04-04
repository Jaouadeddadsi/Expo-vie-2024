"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px]
    mx-auto
    2xl:px-40
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    overflow-x-hidden
    "
    >
      {children}
    </div>
  );
};

export default Container;
