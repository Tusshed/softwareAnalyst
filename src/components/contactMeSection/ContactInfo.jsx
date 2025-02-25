import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Gabrieltoginni@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1 5063801191" Image={FiPhone} />
      <SingleInfo text="Onatario, Canada" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
