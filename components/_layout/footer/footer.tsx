import {
  Dexscreener,
  Dextool,
  FooterBg,
  FooterBg1,
  FooterLogo,
  Telegram,
  Twitter,
  Uniswap,
} from "@/helpers/image-import";
import Image from "next/image";
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-mini">
          <div className="footer__content">
            <div className="footer__top">
              <div className="footer__top-top">
                <div className="footer__top-top-logo">
                  <Image src={FooterLogo} alt="Logo" width={440} height={179} />
                </div>
              </div>
              <div className="footer__top-social">
                <a
                  target="_blank"
                  href="https://t.me/neiro_ethereum"
                  className="footer__top-social-item"
                >
                  <Image src={Telegram} alt="Logo" width={77} height={79} />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/neiro_ethereum"
                  className="footer__top-social-item"
                >
                  <Image src={Twitter} alt="Logo" width={77} height={79} />
                </a>
                <a
                  target="_blank"
                  href="https://app.uniswap.org/swap?outputCurrency=0xee2a03aa6dacf51c18679c516ad5283d8e7c2637"
                  className="footer__top-social-item"
                >
                  <Image src={Uniswap} width={77} height={79} alt="Logo" />
                </a>
                <a
                  target="_blank"
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0x3885fbe4cd8aed7b7e9625923927fa1ce30662a3?t=1722128195769"
                  className="footer__top-social-item"
                >
                  <Image src={Dextool} width={77} height={79} alt="Logo" />
                </a>
                <a
                  target="_blank"
                  href="https://dexscreener.com/ethereum/0x3885fbe4cd8aed7b7e9625923927fa1ce30662a3"
                  className="footer__top-social-item"
                >
                  <Image src={Dexscreener} width={77} height={79} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="footer__bottom">
              <div>© 2024 NEIRO • All Rights Reserved</div>
              <a target="_blank" href="https://t.me/osnovoco">
                <h1>Osnovo</h1>
              </a>
            </div>
            <a target="_blank" href="https://t.me/osnovoco"></a>
          </div>
          <a target="_blank" href="https://t.me/osnovoco">
            <div className="footer__image">
              {/* <Image src={FooterBg} alt="Background" /> */}
              {/* <Image src={FooterBg1} alt="Background" /> */}
            </div>
          </a>
        </div>
        <a target="_blank" href="https://t.me/osnovoco"></a>
      </div>
      <a target="_blank" href="https://t.me/osnovoco"></a>
    </footer>
  );
};

export default Footer;
