import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainContainer from '@/components/MainContainer'
import Card from '@/components/Card'
import MainContent from '@/components/MainContent'
import Header from '@/components/Header'
import CardsContainer from '@/components/CardsContainer'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
        <Header/>
        <MainContent>
          <Hero/>
          <Skills/>
          <CardsContainer>
            <Card label="snapshot" href="https://snapshot.viditkhandelwal.com">a web app that shows you a briefing of the day, including news and weather.</Card>
          </CardsContainer>
        </MainContent>
        <Footer/>
      </MainContainer>
    </>
  )
}
