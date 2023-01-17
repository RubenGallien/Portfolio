import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rubenImg from "../public/assets/RG.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

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
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <Image
            src={rubenImg}
            alt="/"
            width="75"
            height="50"
          />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Accueil
              </li>
            </Link>
            <Link href="/#about">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                À propos
              </li>
            </Link>
            <Link href="/#diplome">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Dîplomes/Certifications
              </li>
            </Link>
            <Link href="/#project">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Projets
              </li>
            </Link>
            <Link href="/#veille">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Veille
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Contact
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
              <Image
                src="/assets/RG.png"
                width="75"
                height="50"
                alt="/"
              />
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
                <li className=" py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">A propos</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Réalisations proffessionnelle</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Certifications</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Veille informationnelle</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className=" pt-40">
              <p className=" uppercase tracking-widest">Contactez-moi</p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
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
