import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const variants1 = {
    hover: {},
  };

  const variants2 = {
    hover: {
      width: "100%",
      height: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div className="z-10 flex flex-row space-x-2 items-start w-screen h-max text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 lg:pt-10 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
      <motion.div
        whileHover="hover"
        variants={variants1}
        className="flex flex-col space-y-1"
      >
        <Link href="https://viditkhandelwal.com">
          <motion.h1 className="text-neutral-900 dark:text-neutral-100 font-light z-10">
            Vidit Khandelwal
          </motion.h1>
        </Link>

        <motion.div
          variants={variants2}
          className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 bg-neutral-900 dark:bg-neutral-100"
        ></motion.div>
      </motion.div>
      <div className="flex flex-row space-x-2 items-center">
        
        <h1 className="text-neutral-900 dark:text-neutral-100 font-medium">
          CS PORTFOLIO
        </h1>
        <Image
          src="/csp-logo.svg"
          width={24}
          height={24}
          alt="CS Portfolio Logo"
        ></Image>
      </div>
    </motion.div>
  );
};

export default Header;
