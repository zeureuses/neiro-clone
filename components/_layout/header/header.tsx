"use client";

import React, { useEffect } from "react";
import { HeaderLogo } from "@/helpers/image-import";
import Image from "next/image";
import "./style.css";

const Header = () => {
  return (
    <header className="header loaded">
      <div className="header__container">
        <div className="header__container-mini">
          <a href="../" className="header__logo">
            <Image src={HeaderLogo} alt="Logo" width={220} height={73} />
          </a>
          <div className="header__right">
            <div className="header__menu menu">
              <button type="button" className="menu__icon icon-menu">
                <span></span>
              </button>
              <nav className="menu__body">
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
  );
};

export default Header;
