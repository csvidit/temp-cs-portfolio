import SectionContainer from "./SectionContainer";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { FaCodepen } from "react-icons/fa";
import Link from "next/link";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center rounded-xl m-2 p-4 mt-20">
      <div className="flex flex-col space-y-1 items-start text-left">
        <h1 className="text-4xl lg:text-6xl mt-10">
          Welcome to my CS Portfolio
        </h1>
        <p className="font-light">
          I made this{" "}
          {/* <strong className="text-lime-600 dark:text-lime-500">
            temporary
          </strong>{" "} */}
          portfolio since my comprehensive and interdisciplinary portfolio is
          still in the works. Take a look at some of my projects!
        </p>
        <div className="flex flex-row space-x-10 flex-wrap text-2xl pt-10">
          <HeroButton href="https://github.com/csvidit">
            <BsGithub />
          </HeroButton>
          <HeroButton href="https://linkedin.com/in/viditkhandelwal">
            <BsLinkedin />
          </HeroButton>
          <HeroButton href="https://codepen.com/viditkhandelwal">
            <FaCodepen />
          </HeroButton>
          <HeroButton href="mailto:viditkhandelwal_2023@depauw.edu">
            <HiEnvelope />
          </HeroButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
