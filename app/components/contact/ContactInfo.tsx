"use client";

import { IconType } from "react-icons";

interface ContactInfoProps {
  label: String;
  icon: IconType;
  data: String;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  label,
  icon: Icon,
  data,
}) => {
  return (
    <div
      className="
        flex
        flex-row
        gap-2
      "
    >
      <div className="items-stretch self-center">
        <Icon size={29} />
      </div>
      <div className="text-[#FFF5EA] flex flex-col gap-0.5">
        <div className="uppercase">{label}</div>
        <div className="text-sm">{data}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
