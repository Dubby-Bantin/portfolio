import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";

import footer_grid from "@/app/assets/icons/footer_grid.svg";
import { socialMedia } from "@/app/lib/constants";
const Footer = () => {
  return (
    <footer
      className="w-full font-text pb-10 relative overflow-clip"
      id="contact"
    >
      {/* background grid */}
      <Image
        src={footer_grid}
        alt="grid"
        className="w-[60rem] -top-[11rem] md:left-[18rem] sm:left-0 absolute h-[50rem] opacity-50 "
      />

      <div className="flex flex-col items-center">
        <h1 className="text-gradient">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:dubbybantin@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-10 gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()}Chidubem Desmond
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, Icon }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#0C0E23] to-[#050112] bg-black-200 rounded-lg "
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
