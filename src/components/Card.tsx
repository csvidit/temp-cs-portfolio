import Link from "next/link";
import CardDescription from "./CardDescription";
import CardIcons from "./CardIcons";
import CardLabel from "./CardLabel";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs, TbBrandFirebase } from "react-icons/tb";
import {HiArrowUpRight} from "react-icons/hi2"

const Card = () => {
  return (
    <motion.div
      className="flex flex-col space-y-1 text-neutral-900 dark:text-neutral-200 backdrop-blur-md rounded-xl bg-neutral-900 dark:bg-neutral-200 dark:bg-opacity-10 bg-opacity-30 p-2 lg:p-4 m-2 w-60 h-52"
      whileHover={{
        scale: 1.025,
        transition: { type: "tween", ease: "easeInOut" },
      }}
    >
      <Link href="/" className="flex flex-col space-y-1">
        <CardLabel>snapshot</CardLabel>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardDescription>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row space-x-1 items-center">
            <TbBrandNextjs />
            <TbBrandFirebase />
          </div>
          <Link href="/" className="flex flex-row space-x-1 items-center">
            <p>visit project</p>
            <HiArrowUpRight/>
          </Link>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
