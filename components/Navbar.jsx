import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rubenImg from "../public/assets/RG.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/mediatek' ||
      router.asPath === '/ai' ||
      router.asPath === '/grisbi' ||
      router.asPath === '/horizon'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

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
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
        <Link href="/">
          <Image
            src={rubenImg}
            alt="/"
            width="75"
            height="50"
            />
        </Link>
        </div>
        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Accueil
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className=" ml-10 text-sm uppercase hover:border-b">
                À propos
              </li>
            </Link>
            <Link href="/#project" scroll={false}>
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Projets
              </li>
            </Link>
            <Link href="/#E4" scroll={false}>
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Épreuve E4
              </li>
            </Link>
            <Link href="/#veille" scroll={false}>
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Veille
              </li>
            </Link>
            <Link href='/#diplome' scroll={false}>
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Dîplomes/Certifications
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
              <Image
                src="/assets/RG.png"
                width="75"
                height="50"
                alt="/"
              />
              </Link>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[90%] py-4">
                Ruben, étudiant en BTS SIO
              </p>
            </div>
          </div>
          <div className=" py-4 flex-col">
            <ul className=" uppercase">
              <Link href="/">
                <li onClick={ ()=>setNav(false) } className=" py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={ ()=> setNav(false) } className=" py-4 text-sm">A propos</li>
              </Link>
              <Link href="/#project" scroll={false}>
                <li onClick={ ()=> setNav(false) } className=" py-4 text-sm">Réalisations proffessionnelle</li>
              </Link>
              <Link href="/#E4" scroll={false}>
                <li onClick={ ()=> setNav(false) } className=" py-4 text-sm">Épreuve E4</li>
              </Link>
              <Link href="/#diplome" scroll={false}>
                <li onClick={ ()=> setNav(false) } className=" py-4 text-sm">Certifications</li>
              </Link>
              <Link href="/#veille" scroll={false}>
                <li onClick={ ()=> setNav(false) } className=" py-4 text-sm">Veille informationnelle</li>
              </Link>
            </ul>
            <div className=" pt-40">
              <p className=" uppercase tracking-widest">Contactez-moi</p>
              <div className=" flex space-x-6  w-full sm:w-[80%]">
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://www.linkedin.com/in/ruben-gallien-74695618a"><FaLinkedinIn /></a>
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://github.com/RubenGallien"><FaGithub /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
