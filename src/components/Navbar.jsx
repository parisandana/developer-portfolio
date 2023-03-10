import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ConnectIcon from "./ConnectIcon";
import { useRouter } from "next/router";
import { greeting } from "@/portfolio";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <i
          className="fa-solid fa-sun ml-10 w-10 text-lg text-yellow-500 transition-transform"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <i
          className="fa-solid fa-moon ml-10 w-10 text-lg text-gray-300 transition-transform"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  useEffect(() => {
    if (
      // router.asPath === "/property" ||
      // router.asPath === "/property" ||
      // router.asPath === "/property" ||
      router.asPath === "/property"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] dark:bg-[#1f2937]"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3] dark:bg-[#1f2937]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-10 2xl:px-16 font">
        <Link href="/" className="text-2xl items-center">
          <span className="text-[#868e96]">&lt;</span>
          <span className="font-bold font-agustina p-2.5 pt-2 text-3xl text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
            Paris Andana
          </span>
          <span className="text-[#868e96]">/&gt;</span>
        </Link>
        <div>
          <ul
            // style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Home</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
            <Link href={greeting.resumeLink} target="_blank">
              <li className="ml-10 text-sm uppercase">Resume</li>
            </Link>
            {renderThemeChanger()}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-8 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen bg-[#ecf0f3] py-10 pl-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="text-xl lg:text-2xl">
                <span className="text-[#868e96]">&lt;</span>
                <span className="font-bold font-agustina p-2.5 pt-2 text-2xl lg:text-3xl text-[#551a8B]">
                  Paris Andana
                </span>
                <span className="text-[#868e96]">/&gt;</span>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg drop-shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something together!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <ConnectIcon
                cName={
                  "flex flex-wrap items-center justify-between my-4 w-full sm:w-[80%]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
