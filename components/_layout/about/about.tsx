import React from "react";
import "./style.css";
import Image from "next/image";
import { ThirdSectionPhotos } from "@/helpers/image-import";

const About = () => {
  return (
    <section
      data-watch="navigator"
      className="page__what what _watcher-view"
      data-watch-threshold="0.67"
    >
      <div
        data-watch-threshold="0.1"
        data-watch-once=""
        data-watch=""
        className="what__container _watcher-view"
      >
        <div className="what__row">
          <div className="what__column">
            <div className="what__video">
              <Image
                src={ThirdSectionPhotos}
                width={500}
                height={500}
                alt="Image"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="what__content" data-da=".what__column, 991.98, 1">
            <i></i>
            <div className="what__body">
              <h2 className="what__title">
                <span>About Neiro</span>
                <i></i>
              </h2>
              <div className="what__text">
                <p>
                  Neiro, the sister of the legendary $DOGE, has arrived on the
                  Ethereum chain to make history. Named after the famous Shiba
                  Inu from the viral Doge meme, Neiro aims to revolutionize the
                  crypto world with innovation and community spirit. With her
                  loyal followers, she is set to become a beloved icon in the
                  digital realm.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
