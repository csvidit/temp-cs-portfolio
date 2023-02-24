import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-neutral-900 dark:bg-neutral-200 dark:bg-opacity-10 bg-opacity-10 rounded-xl p-2 lg:p-4 mt-10">
      <div className="flex flex-col space-y-1 justify-center">
        
      </div>
      <div className="flex flex-col space-y-1 items-end">
        <h1 className="text-2xl mt-10">Welcome to my CS Portfolio</h1>
        <p className="font-light">
          I made this temporary portfolio since my comprehensive and
          interdisciplinary portfolio is still in the works. Take a look at some
          of my projects!
        </p>
      </div>
    </div>
  );
};

export default Hero;
