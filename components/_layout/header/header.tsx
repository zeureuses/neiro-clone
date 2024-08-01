"use client";

import React from "react";
import { HeaderLogo } from "@/helpers/image-import";
import Image from "next/image";
import "./style.css";
import MenuMobile from "../menu_mobile/menuMobile";
import { motion, useAnimation } from "framer-motion";

const Header: React.FC = () => {
  const [navBar, setNavbar] = React.useState<boolean>(false);
  const [active, setActive] = React.useState(false);
  const controls = useAnimation();

  // Animation variants
  const slideFromTop = {
    hidden: {
      opacity: 0,
      y: "-100%", // Move it out of view from the top
    },
    visible: {
      opacity: 1,
      y: 0, // Move it into view
    },
  };

  // Scroll effect for navbar background
  React.useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackgroundColor);
    changeBackgroundColor();

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  // Toggle menu active state
  const handleActive = () => {
    setActive((prev) => !prev);
  };

  // Control animation based on active state
  React.useEffect(() => {
    if (active) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [active, controls]);

  return (
    <>
      <header
        className={`header ${navBar ? "bg-[#161215]" : "bg-transparent"} `}
      >
        <div className="header__container">
          <div className="header__container-mini flex items-center">
            <a href="../" className="header__logo">
              <Image src={HeaderLogo} alt="Logo" width={220} height={73} />
            </a>
            <div className="header__right">
              <div className="header__menu menu flex items-center">
                <div
                  className="flex cursor-pointer flex-col items-center justify-center md:hidden"
                  onClick={handleActive}
                >
                  <span
                    className={`mb-1 block h-[2px] w-[20px] transform border-b-[1px] border-solid border-white transition-transform duration-300 ease-in-out ${active ? "translate-y-[6px] rotate-45" : ""}`}
                  ></span>
                  <span
                    className={`mb-1 block h-[2px] w-[20px] transform border-b-[1px] border-solid border-white transition-transform duration-300 ease-in-out ${active ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`block h-[2px] w-[20px] transform border-b-[1px] border-solid border-white transition-transform duration-300 ease-in-out ${active ? "-translate-y-[6px] -rotate-45" : ""}`}
                  ></span>
                </div>
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={slideFromTop}
                  transition={{ duration: 0.5 }} // Adjust duration as needed
                  className={`absolute inset-0 z-[8999] h-full w-full ${active ? "block" : "hidden"}`}
                >
                  <MenuMobile active={active} handleActive={handleActive} />
                </motion.div>

                <nav className={`menu__body`}>
                  <ul className="menu__list">
                    <li className="menu__item">
                      <a
                        href="#"
                        data-goto=".hero"
                        className="menu__link _navigator-active"
                      >
                        Home
                      </a>
                    </li>
                    <li className="menu__item">
                      <a
                        href="#"
                        data-goto-header=""
                        data-goto=".what"
                        className="menu__link"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu__item">
                      <a
                        href="#"
                        data-goto-header=""
                        data-goto=".how"
                        className="menu__link"
                      >
                        How to buy
                      </a>
                    </li>
                    <li className="menu__item">
                      <a
                        href="#"
                        data-goto-header=""
                        data-goto=".tokenomics"
                        className="menu__link"
                      >
                        Tokenomics
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__buttons" data-da=".menu__body, 991.98">
                <a
                  href="https://app.uniswap.org/swap?outputCurrency=0xee2a03aa6dacf51c18679c516ad5283d8e7c2637"
                  className="header__button button"
                >
                  <span>BUY NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
