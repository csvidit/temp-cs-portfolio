const Skills = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-neutral-900 dark:bg-neutral-200 dark:bg-opacity-10 bg-opacity-10 rounded-xl p-2 lg:p-4 mt-10">
      <div className="flex flex-col space-y-1 justify-center items-center w-1/3">
        <h2 className="text-6xl">Skills</h2>
      </div>
      <div className="flex flex-col space-y-1 w-2/3 justify-center">
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 w-2/5">
          <h1 className="text-xl mt-10">web development</h1>
        </div>
        <p className="font-light">
          React.js, Next.js, Node.js, Express, Node.js, Firebase, TailwindCSS, Bootstrap, Framer Motion, GSAP
        </p>
      </div>
    </div>
  );
};

export default Skills;
