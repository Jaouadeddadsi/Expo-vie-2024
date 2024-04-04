"use client";

import { FiPhoneCall } from "react-icons/fi";
import Container from "../Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import Adreess from "./Adreess";

const Contact = () => {
  return (
    <div
      className="
          bg-local
          bg-origin-content
          bg-center
          bg-no-repeat
          bg-cover
          bg-contact
          "
    >
      <div
        className="
            w-full
            h-full
          bg-[#171E21]
            py-8 
            md:py-16
            opacity-60
          "
      >
        <Container>
          <div
            className="
                  flex
                  flex-col
                  md:flex-row
                  gap-8
                  xl:gap-16
                "
          >
            {/* contact */}
            <div className="text-[#FFF5EA] basis-1/2">
              <h1
                className="
                      text-[#FFF5EA] 
                      text-2xl
                      md:text-4xl
                      font-playfair
                      font-bold
                      "
              >
                Demandes générales
              </h1>
              <p className="pt-9">
                Pour toute demande générale concernant l'expo, veuillez nous
                contacter par email. Nous apprécions vos commentaires et sommes
                ici pour vous aider.
              </p>
              {/* contact form */}
              <ContactForm />
              <div
                className="
                      mt-9
                      flex
                      flex-row
                      justify-between
                      items-center
                      flex-wrap
                      gap-4
                    "
              >
                <ContactInfo
                  label="téléphone"
                  icon={FiPhoneCall}
                  data="+212 661 00 00 00"
                />
                <ContactInfo
                  label="fax"
                  icon={LiaFaxSolid}
                  data="+212 537 00 00 00"
                />
                <ContactInfo
                  label="email"
                  icon={MdOutlineMailOutline}
                  data="contact@exposition.com"
                />
              </div>
            </div>
            {/* google map */}
            <div className="h-[300px] md:h-auto md:basis-1/2 w-full">
              <Adreess />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
