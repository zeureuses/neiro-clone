import Link from "next/link";
import React from "react";

const pages = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "How to Buy",
  },
  {
    name: "Tokenomics",
  },
];

interface MobileProps {
  active: boolean;
  handleActive: () => void;
}

const MenuMobile: React.FC<MobileProps> = ({ active, handleActive }) => {
  return (
    <>
      <div
        className="flex h-[5vh] w-full cursor-pointer flex-col items-end justify-end bg-[#161215f3] pr-[15px] pt-[24px] md:hidden"
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
      <div className="absolute z-[9999] flex h-[95vh] w-full flex-col items-center justify-center space-y-5 bg-[#161215f3]">
        {pages.map((p, i) => (
          <Link
            className="text-xl text-white"
            href={`#${p.name.toLowerCase()}`}
          >
            {p.name}
          </Link>
        ))}
        <div className="button-buy-mobile" data-da=".menu__body, 991.98">
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0xee2a03aa6dacf51c18679c516ad5283d8e7c2637"
            className="header__button button"
          >
            <span>BUY NOW</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
