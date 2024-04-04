"use client";

import Container from "./Container";

interface HeaderProps {
  title?: String;
  subtitle?: String;
  subSubtitle?: String;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, subSubtitle }) => {
  return (
    <div
      className="
    bg-local
    bg-origin-content
    bg-right
    md:bg-center
    bg-no-repeat
    bg-cover
    bg-header
    "
    >
      <div
        className="
        bg-gradient-to-r 
        from-[#D7704200] 
        to-[#D77042B5]
        min-h-[200px]
        md:min-h-[300px]
        flex
        justify-center
        items-center
      "
      >
        <Container>
          <div
            className="
          h-full
          w-full
          justify-center
          items-end
          pt-16
          md:pt-24
          pb-12
        "
          >
            <div
              className="
              text-[#F1FAFF]
              text-lg
              md:text-4xl
              font-playfair
              font-bold
              h-full
              flex
              flex-col
              justify-end
              items-center
              gap-1
              md:gap-2
            "
            >
              {title && (
                <div>
                  <span className="bg-[#D77042] inline-block px-3 py-1">
                    {title}:
                  </span>
                </div>
              )}
              {subtitle && (
                <div>
                  <span className="bg-[#D77042] inline-block px-3 py-1">
                    {subtitle}
                  </span>
                </div>
              )}
              {subSubtitle && (
                <div>
                  <span className="bg-[#D77042] inline-block px-3 py-1">
                    {subSubtitle}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
