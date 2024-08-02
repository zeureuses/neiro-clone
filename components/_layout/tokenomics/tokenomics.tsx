"use client";

import React from "react";
import "./style.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const opacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideFromLeft = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
  };
  const slideFromRight = {
    hidden: {
      x: "100vw",
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
      className="page__tokenomics tokenomics"
      data-watch-threshold="0.35"
      id="tokenomics"
    >
      <div
        data-watch-threshold="0.8"
        data-watch-once=""
        data-watch=""
        className="tokenomics__title title-tokenomics _watcher-view"
      >
        <div className="title-tokenomics__container-mini">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideFromRight}
            transition={{ duration: 0.5 }}
          >
            Tokenomics!
          </motion.span>
        </div>
      </div>
      <div className="tokenomics__container">
        <div className="tokenomics__container-mini">
          <div
            data-watch-threshold="0.3"
            data-watch-once=""
            data-watch=""
            className="tokenomics__items"
          >
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={slideFromRight}
              transition={{ duration: 0.5 }}
              className="tokenomics__item item-tokenomics"
            >
              <div className="item-tokenomics__body">
                <div className="item-tokenomics__decor">
                  <span></span>
                </div>
                <div className="item-tokenomics__title">Token Information</div>
                <div className="item-tokenomics__items">
                  <div className="item-tokenomics__item active">
                    <div className="item-tokenomics__item-name">Token Name</div>
                    <div className="item-tokenomics__item-value">$NEIRO</div>
                  </div>
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">Network</div>
                    <div className="item-tokenomics__item-value">ETHEREUM</div>
                  </div>
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">No Tax</div>
                    <div className="item-tokenomics__item-value">0/0</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={slideFromLeft}
              transition={{ duration: 0.5 }}
              className="tokenomics__item item-tokenomics"
            >
              <div className="item-tokenomics__body">
                <div className="item-tokenomics__decor">
                  <span></span>
                </div>
                <div className="item-tokenomics__title">Supply Information</div>
                <div className="item-tokenomics__items">
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">CA</div>
                    <div className="item-tokenomics__item-value">
                      <span>0XEE...</span>
                      <button className="copy-ca-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M24 0.5H8C7.60218 0.5 7.22064 0.658035 6.93934 0.93934C6.65804 1.22064 6.5 1.60218 6.5 2V6.5H2C1.60218 6.5 1.22064 6.65804 0.93934 6.93934C0.658035 7.22064 0.5 7.60218 0.5 8V24C0.5 24.3978 0.658035 24.7794 0.93934 25.0607C1.22064 25.342 1.60218 25.5 2 25.5H18C18.3978 25.5 18.7794 25.342 19.0607 25.0607C19.342 24.7794 19.5 24.3978 19.5 24V19.5H24C24.3978 19.5 24.7794 19.342 25.0607 19.0607C25.342 18.7794 25.5 18.3978 25.5 18V2C25.5 1.60218 25.342 1.22064 25.0607 0.93934C24.7794 0.658035 24.3978 0.5 24 0.5ZM16.5 22.5H3.5V9.5H16.5V22.5ZM22.5 16.5H19.5V8C19.5 7.60218 19.342 7.22064 19.0607 6.93934C18.7794 6.65804 18.3978 6.5 18 6.5H9.5V3.5H22.5V16.5Z"
                            fill="black"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">
                      Initial Supply
                    </div>
                    <div className="item-tokenomics__item-value">1B</div>
                  </div>
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">
                      Circulating Supply
                    </div>
                    <div className="item-tokenomics__item-value">1B</div>
                  </div>
                  <div className="item-tokenomics__item">
                    <div className="item-tokenomics__item-name">Liquidity</div>
                    <div className="item-tokenomics__item-value">BURNED</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
