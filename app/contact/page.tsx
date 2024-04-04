"use client";

import CopyRight from "../components/CopyRight";
import Header from "../components/Header";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <>
      {/* header */}
      <Header />
      <div
        className="
        bg-[#171E21]
        mx-auto
        xl:px-20
        md:px-10
        px-0
      "
      >
        <div className="-translate-y-24">
          <Contact />
        </div>
      </div>
      <CopyRight color="#D77042" />
    </>
  );
};

export default ContactPage;
