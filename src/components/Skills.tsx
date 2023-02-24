import SectionContainer from "./SectionContainer";
import SkillsContainer from "./SkillsContainer";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col space-y-1 lg:justify-center lg:items-center w-1/3">
        <h2 className="text-4xl lg:text-6xl">Skills</h2>
      </div>
      <div className="flex flex-col space-y-1 w-2/3 justify-center">
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
          <h1 className="text-xl mt-10">web development</h1>
        </div>
        <SkillsContainer>
          <SkillsItem>React.js</SkillsItem>
          <SkillsItem>Next.js</SkillsItem>
          <SkillsItem>Express</SkillsItem>
          <SkillsItem>JQuery</SkillsItem>
          <SkillsItem>Node.js</SkillsItem>
          <SkillsItem>Express</SkillsItem>
          <SkillsItem>Redux</SkillsItem>
        </SkillsContainer>

        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
          <h1 className="text-xl mt-10">mobile development</h1>
        </div>
        <SkillsContainer>
          <SkillsItem>AndroidX</SkillsItem>
          <SkillsItem>Jetpack</SkillsItem>
        </SkillsContainer>
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
          <h1 className="text-xl mt-10">databases</h1>
        </div>
        <SkillsContainer>
          <SkillsItem>SQLite</SkillsItem>
          <SkillsItem>PostgreSQL</SkillsItem>
          <SkillsItem>Firebase Cloud Firestore</SkillsItem>
          <SkillsItem>MongoDB</SkillsItem>
        </SkillsContainer>
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
          <h1 className="text-xl mt-10">ai & ml</h1>
        </div>
        <SkillsContainer>
          <SkillsItem>pandas</SkillsItem>
          <SkillsItem>numpy</SkillsItem>
        </SkillsContainer>
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
          <h1 className="text-xl mt-10">languages</h1>
        </div>
        <SkillsContainer>
          {" "}
          <SkillsItem>Java</SkillsItem>
          <SkillsItem>JavaScript</SkillsItem>
          <SkillsItem>TypeScript</SkillsItem>
          <SkillsItem>Python</SkillsItem>
          <SkillsItem>C++</SkillsItem>
          <SkillsItem>SQL</SkillsItem>
          <SkillsItem>HMTL5</SkillsItem>
          <SkillsItem>CSS3</SkillsItem>
          <SkillsItem>SCSS</SkillsItem>
          <SkillsItem>Erlang</SkillsItem>
          <SkillsItem>GraphQL</SkillsItem>
        </SkillsContainer>
        <div className="border-b border-b-neutral-900 dark:border-b-neutral-200 w-2/5">
          <h1 className="text-xl mt-10">tools & platforms</h1>
        </div>
        <SkillsContainer>
          <SkillsItem>GitHub</SkillsItem>
          <SkillsItem>VSCode</SkillsItem>
          <SkillsItem>Android Studio</SkillsItem>
          <SkillsItem>Firebase</SkillsItem>
          <SkillsItem>Google Cloud</SkillsItem>
        </SkillsContainer>
      </div>
      </SectionContainer>
  );
};

export default Skills;
