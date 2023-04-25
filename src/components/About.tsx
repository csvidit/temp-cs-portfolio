import Emphasis from "./Emphasis";
import MajorEmphasis from "./MajorEmphasis";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-1/3 p-8 lg:p-16">
          <Image
            className="rounded-xl"
            src="/vidit.webp"
            width={500}
            height={500}
            alt="Vidit Khandelwal"
          ></Image>
        </div>
        <div className="flex flex-col space-y-4 lg:w-2/3 justify-center">
          <SectionTitle>
            An experienced full-stack web and Android developer
          </SectionTitle>
          <p className="">
            I love making <Emphasis>simple designs</Emphasis> that look good,
            and <Emphasis>animations that make sense.</Emphasis> The less
            clutter, the better. I learnt React and Next.js on my own from the
            ground up, and none of my projects can be duplicated by following a
            tutorial. I believe in learning on my own than just following
            spoon-fed tutorials.
          </p>
          <p className="">
            I learn things very fast and in{" "}
            <Emphasis>both independent and group environments,</Emphasis> as
            demonstrated by my self-taught skills and from-scratch projects. I
            also developed a beta version of a Android image processing app{" "}
            <Emphasis>
              as the sole CS professional at the startup I interned at.
            </Emphasis>{" "}
            That required me to learn many Android concepts and image processing
            libraries in the span of a few weeks.
          </p>
          <p className="">
            I have academic strengths across Computer Science and Economics,
            with demonstrated experience in high leadership and mentoring
            positions. I am the{" "}
            <Emphasis>
              Co-Founder and current President of the International Computer
              Science Association
            </Emphasis>{" "}
            and have been a Student Ambassador and member of various Advisory
            Boards. Teamwork is my mantra, and I do that night and day in and
            out of class.
          </p>
          <p className="">
            Aside from my CS talents, I also like{" "}
            <Emphasis>graphic designing as a hobby,</Emphasis>
            and appreciate books written by esteemed authors such as Raghuram
            Rajan on economics, ethics, and the intersection of the two. Given
            enough time, I can make a mean tiramisu and a terrific Opera cake.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
