"use client";

import React, { useEffect } from "react";
import { HeaderLogo } from "@/helpers/image-import";
import Image from "next/image";
import "./style.css";

const Header = () => {
  const [navBar, setNavbar] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

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

  const handleActive = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <header className={`header ${navBar ? "bg-[#161215]" : "bg-transparent"} `}>
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
                  className={`block h-[2px] w-[20px] border-b-[1px] border-solid ${"border-white"} mb-1 transform transition-transform duration-300 ease-in-out ${active ? "translate-y-[6px] rotate-45" : ""}`}
                ></span>
                <span
                  className={`block h-[2px] w-[20px] border-b-[1px] border-solid ${"border-white"} mb-1 transform transition-transform duration-300 ease-in-out ${active ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-[2px] w-[20px] border-b-[1px] border-solid ${"border-white"} transform transition-transform duration-300 ease-in-out ${active ? "-translate-y-[6px] -rotate-45" : ""}`}
                ></span>
              </div>
              <nav
                className={`menu__body ${active ? "absolute inset-0 z-[8999] h-full w-full" : ""}`}
              >
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
      {active && (
        <div className="absolute z-[9999] h-screen w-full bg-black">
          <nav className={`menu__body text-white`}>
            <ul className="menu__list">
              <li className="menu__item text-white">
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
      )}
    </header>
  );
};

export default Header;
