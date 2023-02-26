import CardDescription from "./CardDescription";
import CardLabel from "./CardLabel";
import SectionContainer from "./SectionContainer";

const Education = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col space-y-1 lg:justify-center lg:items-center lg:w-1/3">
        <h2 className="text-4xl lg:text-6xl">Education</h2>
      </div>
      <div className="flex flex-col space-y-1 lg:w-2/3 justify-center">
        <h2 className="text-2xl lg:text-4xl m-2 mt-5">DePauw University</h2>
        <p className="text-lg m-2">
          Bachelor&apos;s degree in Computer Science
          <span className="font-light"> with a minor in Economics</span>
        </p>
        <p className="text-lg m-2">
          Semester abroad at New College, University of Oxford,
          <span className="font-light"> studying International Economics and Creative Writing</span>
        </p>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex flex-col space-y-1 h-36 backdrop-blur-md rounded-xl border border-neutral-900 dark:border-neutral-200 p-2 lg:p-4 m-2">
            <CardLabel>Selected Coursework</CardLabel>
            <CardDescription>
              Data Structures, Software Development, Artificial Intelligence,
              Web Development, Mobile Development, Graphics, Computer Security
            </CardDescription>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-1 h-36 backdrop-blur-md rounded-xl border border-neutral-900 dark:border-neutral-200 p-2 lg:p-4 m-2">
            <CardLabel>GPA</CardLabel>
            <div className="flex flex-col space-y-1">
              <CardDescription>Cumulative GPA: 3.87</CardDescription>
              <CardDescription>Major GPA: 3.85</CardDescription>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col space-y-1 h-18 w-full backdrop-blur-md rounded-xl border border-neutral-900 dark:border-neutral-200 p-2 lg:p-4 m-2">
            <CardLabel>Awards</CardLabel>
            <CardDescription>
              Outstanding Service to the Computer Science Department
            </CardDescription>
            <CardDescription>
              Robert Thomas Outstanding Senior Award
            </CardDescription>
            <CardDescription>Computer Science Honor Society</CardDescription>
            <CardDescription>Dean&apos;s List all semesters</CardDescription>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;
