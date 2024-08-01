"use client";

import React from "react";
import "./style.css";
import { how1, how2, how3, how4, HowToBuyBG } from "@/helpers/image-import";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navigator = () => {
  const opacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideFromRight = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      data-watch="navigator"
      className="page__how how"
      data-watch-threshold="0.24"
    >
      <div
        data-watch-threshold="0.8"
        data-watch-once=""
        data-watch=""
        className="how__title title-how _watcher-view"
      >
        <div className="title-how__container-mini">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideFromRight}
            transition={{ duration: 0.5 }}
          >
            How to Buy?
          </motion.span>
        </div>
      </div>
      <div className="how__container">
        <div className="how__container-mini">
          <div
            data-watch-threshold="0.3"
            data-watch-once=""
            data-watch=""
            className="how__items items-how _watcher-view"
          >
            <div className="items-how__bg">
              <Image
                src={HowToBuyBG}
                width={500}
                height={500}
                className="h-full w-full object-cover"
                alt="Background"
              />
            </div>
            <div className="items-how__item item-how">
              <div className="item-how__decor"></div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={opacity}
                transition={{ duration: 0.5 }}
                className="item-how__body"
              >
                <div className="item-how__number">
                  <span>1</span>
                </div>
                <div className="item-how__header">
                  <h4 className="item-how__title">Create a Wallet</h4>
                  <div className="item-how__icon">
                    <Image src={how1} width={163} height={167} alt="Icon" />
                  </div>
                </div>
                <div className="item-how__text">
                  To purchase a token on Ethereum using MetaMask, first set up
                  your MetaMask wallet. Download the MetaMask extension from the
                  official website and install it in your browser. Create a new
                  wallet by following the prompts to set a password and secure
                  your backup seed phrase. Once your wallet is set up, fund it
                  by transferring Ether (ETH) from an exchange or another wallet
                  to your MetaMask Ethereum address.
                </div>
              </motion.div>
            </div>
            <div className="items-how__item item-how">
              <div className="item-how__decor"></div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={opacity}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="item-how__body"
              >
                <div className="item-how__number">
                  <span>2</span>
                </div>
                <div className="item-how__header">
                  <h4 className="item-how__title">Connect to DEX</h4>
                  <div className="item-how__icon">
                    <Image src={how2} width={163} height={167} alt="Icon" />
                  </div>
                </div>
                <div className="item-how__text">
                  Next, connect to a decentralized exchange (DEX) like Uniswap,
                  SushiSwap, or 1inch. Open the DEX website and click on
                  "Connect Wallet," selecting MetaMask from the options. Approve
                  the connection in the MetaMask pop-up to link your wallet to
                  the DEX. This will allow you to trade directly from your
                  MetaMask wallet.
                </div>
              </motion.div>
            </div>
            <div className="items-how__item item-how">
              <div className="item-how__decor"></div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={opacity}
                transition={{ duration: 0.5, delay: 1 }}
                className="item-how__body"
              >
                <div className="item-how__number">
                  <span>3</span>
                </div>
                <div className="item-how__header">
                  <h4 className="item-how__title">Swap ETH for Tokens</h4>
                  <div className="item-how__icon">
                    <Image src={how3} width={163} height={167} alt="Icon" />
                  </div>
                </div>
                <div className="item-how__text">
                  To swap ETH for your desired token, select ETH in the "from"
                  field and choose your desired token in the "to" field. Enter
                  the amount of ETH you want to swap, and the DEX will show the
                  estimated amount of tokens you'll receive. Click "Swap" or
                  "Exchange," then confirm the transaction in the MetaMask
                  pop-up window. Make sure to review all details before
                  finalizing the transaction.
                </div>
              </motion.div>
            </div>
            <div className="items-how__item item-how">
              <div className="item-how__decor"></div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={opacity}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="item-how__body"
              >
                <div className="item-how__number">
                  <span>4</span>
                </div>
                <div className="item-how__header">
                  <h4 className="item-how__title">Verify and Manage Tokens</h4>
                  <div className="item-how__icon">
                    <Image src={how4} width={163} height={167} alt="Icon" />
                  </div>
                </div>
                <div className="item-how__text">
                  Finally, verify your transaction status in MetaMask under the
                  "Activity" tab or on Etherscan using your Ethereum address. If
                  the token doesn't appear in your MetaMask wallet, manually add
                  it by clicking "Assets," then "Add Token," and entering the
                  token's contract address, symbol, and decimal. Your new tokens
                  should now be visible in your MetaMask wallet, and you can
                  manage, send, or trade them as needed.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigator;
