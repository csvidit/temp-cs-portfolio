import CardDescription from "./CardDescription";
import CardLabel from "./CardLabel";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";
import { BsDot } from "react-icons/bs";

const WorkExperience = () => {
  return (
    <SectionContainer id="work">
      <div className="flex flex-col space-y-1 lg:justify-center lg:items-center lg:w-1/3">
        <SectionTitle>Experience</SectionTitle>
      </div>
      <div className="flex flex-col space-y-1 lg:w-2/3 justify-center">
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Software Development Intern</CardLabel>
            <CardDescription>November 2022 - December 2022</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">Pixus, Inc.</span>
            <BsDot />
            <span className="font-light">Remote</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                Continued development of the CaptureNoire Photography Suite,
                with improved features and AR functionality.
              </li>
            </ul>
          </CardDescription>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Software Development Intern</CardLabel>
            <CardDescription>June 2022 - August 2022</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">Pixus, Inc.</span>
            <BsDot />
            <span className="font-light">Indianapolis, IN (Hybrid)</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                Started development of CaptureNoire, an industry-grade
                photography app for Android optimized for people with a broad
                range of skin tones, with an upcoming beta release.
              </li>
              <li>
                Applied UI/UX design and Android app development best practices
                as the sole person with a computer-science background at this
                early age start-up.
              </li>
            </ul>
          </CardDescription>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Marketing Intern</CardLabel>
            <CardDescription>November 2021 - May 2022</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">
              DePauw University, Hubbard Center for Student Engagement
            </span>
            <BsDot />
            <span className="font-light">Greencastle, IN</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                Successfully implemented a marketing strategy to support the
                efforts of the on-campus career center.
              </li>
              <li>
                Delegated work to the team in weekly meetings to timely and
                effective marketing of events to 1700+ students.
              </li>
            </ul>
          </CardDescription>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Information Services Summer Intern</CardLabel>
            <CardDescription>May 2021 - August 2021</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">
              DePauw University, Information Services
            </span>
            <BsDot />
            <span className="font-light">Greencastle, IN</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                Successfully collaborated with IT professionals to deploy new
                hardware and software solutions on campus.
              </li>
              <li>
                Manned the HelpDesk and ticketing system to ensure all tasks
                were on schedule and in accordance with established workflows.
              </li>
            </ul>
          </CardDescription>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Web Developer Intern</CardLabel>
            <CardDescription>August 2020 - December 2020</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">DePauw University, Web Services</span>
            <BsDot />
            <span className="font-light">Greencastle, IN</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                Utilized BigTree CMS&apos; SEO tools to increase optimization of
                the DePauw University website by more than 40%.
              </li>
              <li>Created a website on a LAMP server.</li>
            </ul>
          </CardDescription>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between lg:items-center">
            <CardLabel>Web Developer Intern</CardLabel>
            <CardDescription>August 2019 - May 2020</CardDescription>
          </div>
          <CardDescription>
            <span className="font-medium">
              DePauw University, ITAP Institute
            </span>
            <BsDot />
            <span className="font-light">Greencastle, IN</span>
          </CardDescription>
          <CardDescription>
            <ul className="list-disc">
              <li>
                First-year training program for the highly selective honors
                program at DePauw University.
              </li>
              <li>
                Participated in a weekly meeting to discuss the benefits and
                challenges of different technologies and make useful projects
                using them.
              </li>
            </ul>
          </CardDescription>
        </WorkCard>
      </div>
    </SectionContainer>
  );
};

export default WorkExperience;
