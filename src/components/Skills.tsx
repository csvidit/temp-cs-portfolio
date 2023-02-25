import SectionContainer from "./SectionContainer";
import SkillsContainer from "./SkillsContainer";
import SkillsItem from "./SkillsItem";
import SkillsSectionTitle from "./SkillsSectionTitle";

const Skills = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col space-y-1 lg:justify-center lg:items-center w-1/3">
        <h2 className="text-4xl lg:text-6xl">Skills</h2>
      </div>
      <div className="flex flex-col space-y-1 w-2/3 justify-center">
        <SkillsSectionTitle>web development</SkillsSectionTitle>
        <SkillsContainer>
          <SkillsItem>React.js</SkillsItem>
          <SkillsItem>Next.js</SkillsItem>
          <SkillsItem>Express</SkillsItem>
          <SkillsItem>JQuery</SkillsItem>
          <SkillsItem>Node.js</SkillsItem>
          <SkillsItem>Express</SkillsItem>
          <SkillsItem>Redux</SkillsItem>
        </SkillsContainer>
        <SkillsSectionTitle>mobile development</SkillsSectionTitle>
        <SkillsContainer>
          <SkillsItem>AndroidX</SkillsItem>
          <SkillsItem>Jetpack</SkillsItem>
        </SkillsContainer>
        <SkillsSectionTitle>databases</SkillsSectionTitle>
        <SkillsContainer>
          <SkillsItem>SQLite</SkillsItem>
          <SkillsItem>PostgreSQL</SkillsItem>
          <SkillsItem>Firebase Cloud Firestore</SkillsItem>
          <SkillsItem>MongoDB</SkillsItem>
        </SkillsContainer>
        <SkillsSectionTitle>ai & ml</SkillsSectionTitle>
        <SkillsContainer>
          <SkillsItem>pandas</SkillsItem>
          <SkillsItem>numpy</SkillsItem>
        </SkillsContainer>
        <SkillsSectionTitle>languages</SkillsSectionTitle>
        <SkillsContainer>
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
        <SkillsSectionTitle>tools & platforms</SkillsSectionTitle>
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
