import Head from "next/head";
import { useEffect, useState } from "react";
import { splashScreen } from "@/portfolio";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Splashscreen from "@/components/Splashscreen";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowSplash(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isShowSplash && splashScreen.enabled ? (
        <Splashscreen />
      ) : (
        <>
          <Navbar />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
