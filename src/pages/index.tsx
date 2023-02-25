import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainContainer from "@/components/MainContainer";
import Card from "@/components/Card";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import CardsContainer from "@/components/CardsContainer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CS Portfolio - Vidit Khandelwal</title>
        <meta
          name="description"
          content="The computer science portfolio of Vidit Khandelwal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, react, reactjs, nextjs, firebase, firestore, tailwind, tailwindcss, framer-motion"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="CS Portfolio - Vidit Khandelwal" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://viditkhandelwal.com" />
        <meta property="og:site_name" content="Vidit Khandelwal" />
        <meta
          property="description"
          content="The computer science portfolio of Vidit Khandelwal"
        />
      </Head>
      <MainContainer>
        <Header />
        <MainContent>
          <Hero />
          <Skills />
          <h2 className="text-4xl lg:text-6xl mt-10">Projects</h2>
          <h2 className="text-2xl lg:text-4xl mt-5">web development</h2>
          <CardsContainer>
            <Card label="snapshot" href="https://snapshot.viditkhandelwal.com">
              A web app that shows you a briefing of the day, including news and
              weather
            </Card>
            <Card label="blog-mvp" href="https://github.com/csvidit/blog-mvp">
              A blog concept made using Express and PostgreSQL.
            </Card>
            <Card label="turbobiz" href="https://turbobiz.viditkhandelwal.com">
              An upcoming web app that makes it easier for you to create a
              business, or develop a name for yours. Based on OpenAI GPT-3.
            </Card>
            <Card
              label="temp-cs-portfolio"
              href="https://cs.viditkhandelwal.com"
            >
              This website, a minimalist CS portfolio made in Next.js
            </Card>
            <Card label="react-bio-v2" href="https://bio.viditkhandelwal.com">
              A link-in-bio style website made in React, which fetches links
              from Hygraph using GraphQL
            </Card>
            <Card label="nyt" href="https://bio.viditkhandelwal.com">
              A no-nonsense Next.js web app that gets you the top stories from
              the New York Times wire
            </Card>
            <Card label="JSPlayground" href="https://github.com/JSPlayground">
              A website made to test a number of JavaScript concepts and
              micro-projects while learning.
            </Card>
            <Card
              label="hover-video-landing-page"
              href="https://github.com/csvidit/hover-video-landing-page"
            >
              A landing page concept where a video plays in the background
              whenever the user hovers onto a particular link.
            </Card>
          </CardsContainer>
          <h2 className="text-2xl lg:text-4xl mt-5">android development</h2>
          <CardsContainer>
            <Card
              label="Repertoire"
              href="https://github.com/csvidit/Repertoire"
            >
              A no-nonsense web app that gets you the top stories from the New
              York Times wire
            </Card>
            <Card label="Repair Shop" href="https://csvidit.com/RepairShop">
              A repair shop app
            </Card>
            <Card
              label="Restaurant Rater"
              href="https://csvidit.com/RepairShop"
            >
              A restaurant rating app
            </Card>
            <Card
              label="Computer Scientist Wiki"
              href="https://csvidit.com/ComputerScientistWiki"
            >
              A wiki/biography app that shows a biography of a famous computer
              scientist. It also has the frontend UI for a DonateActivity
            </Card>
            <Card label="Jukebox" href="https://csvidit.com/Jukebox">
              An MVP for a jukebox style music player.
            </Card>
            <Card label="BucketTracker" href="https://csvidit.com/Jukebox">
              An Android app to track score and times for basketball matches,
              made in Android Studio. This is an MVP, so it only stores the data
              in memory, not storage
            </Card>
          </CardsContainer>
          <h2 className="text-2xl lg:text-4xl mt-5">python</h2>
          <CardsContainer>
            <Card
              label="deep-neural-network"
              href="https://csvidit.com/deep-neural-network"
            >
              A deep neural network classifier, made in Python
            </Card>
          </CardsContainer>
          <h2 className="text-2xl lg:text-4xl mt-5">c++</h2>
          <CardsContainer>
            <Card label="GraphicsLib" href="https://csvidit.com/GraphicsLib">
              A graphics library created from scratch in C++, similar to OpenGL.
            </Card>
            <Card
              label="TreeSortedStack"
              href="https://csvidit.com/TreeSortedStack"
            >
              An abstract data structure similar to a binary stree. Represented
              as an array where every node must be smaller than its children.
            </Card>
          </CardsContainer>
          <h2 className="text-2xl lg:text-4xl mt-5">other misc. projects</h2>
          <CardsContainer>
            <Card
              label="Venerable Manor"
              href="https://csvidit.com/VenerableManor"
            >
              A text-based adventure game made in Java.
            </Card>
            <Card
              label="RoverCommsModule"
              href="https://csvidit.com/RoverCommsModule"
            >
              A group project in Java, Python, and PEP9 which is supposed to
              process and parse communication between a hypothetical Mission
              Control and a Mars Rover.
            </Card>
          </CardsContainer>
          <Link
            href="https://github.com/csvidit"
            className="flex flex-col space-y-1 backdrop-blur-md rounded-xl bg-neutral-900 dark:bg-neutral-200 dark:bg-opacity-10 bg-opacity-10 p-2 lg:p-4 m-2 mt-10 items-center justify-center"
          >
            <h2 className="text-2xl lg:text-4xl text-right">
              Visit my GitHub profile to see all other projects :&#41;
            </h2>
          </Link>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
