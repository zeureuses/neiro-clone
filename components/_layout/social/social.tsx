import React from "react";
import "./style.css";

const Social = () => {
  return (
    <section className="page__social social">
      <div
        data-watch-threshold="0.8"
        data-watch-once=""
        data-watch=""
        className="social__title title-social _watcher-view"
      >
        <div className="title-social__container-mini">
          <span>Join Us</span>
        </div>
      </div>
      <div className="social__container">
        <div className="social__container-mini">
          <div className="social__text">JOIN US NOW</div>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x3885fbe4cd8aed7b7e9625923927fa1ce30662a3?t=1722128195769"
            className="social__button button button--big"
          >
            <span>Buy Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M9.22876 7.21146C8.30577 7.21146 7.55668 7.96056 7.55668 8.88355V24.2667C7.55668 25.1897 8.30577 25.9388 9.22876 25.9388H24.6119C25.5349 25.9388 26.284 25.1897 26.284 24.2667V19.2505C26.284 18.8957 26.4249 18.5554 26.6758 18.3046C26.9267 18.0537 27.2669 17.9128 27.6217 17.9128C27.9764 17.9128 28.3167 18.0537 28.5675 18.3046C28.8184 18.5554 28.9593 18.8957 28.9593 19.2505V24.2667C28.9593 25.4197 28.5013 26.5255 27.686 27.3408C26.8707 28.1561 25.7649 28.6141 24.6119 28.6141H9.22876C8.07576 28.6141 6.96997 28.1561 6.15468 27.3408C5.33938 26.5255 4.88135 25.4197 4.88135 24.2667V8.88355C4.88135 7.73054 5.33938 6.62476 6.15468 5.80946C6.96997 4.99416 8.07576 4.53613 9.22876 4.53613H14.245C14.5998 4.53613 14.94 4.67707 15.1909 4.92793C15.4417 5.17879 15.5827 5.51903 15.5827 5.8738C15.5827 6.22857 15.4417 6.56881 15.1909 6.81967C14.94 7.07053 14.5998 7.21146 14.245 7.21146H9.22876ZM19.5957 7.21146C19.2409 7.21146 18.9007 7.07053 18.6498 6.81967C18.3989 6.56881 18.258 6.22857 18.258 5.8738C18.258 5.51903 18.3989 5.17879 18.6498 4.92793C18.9007 4.67707 19.2409 4.53613 19.5957 4.53613H27.6217C27.9764 4.53613 28.3167 4.67707 28.5675 4.92793C28.8184 5.17879 28.9593 5.51903 28.9593 5.8738V13.8998C28.9593 14.2546 28.8184 14.5948 28.5675 14.8457C28.3167 15.0965 27.9764 15.2375 27.6217 15.2375C27.2669 15.2375 26.9267 15.0965 26.6758 14.8457C26.4249 14.5948 26.284 14.2546 26.284 13.8998V9.10292L20.5414 14.8455C20.2891 15.0892 19.9512 15.224 19.6005 15.221C19.2498 15.2179 18.9143 15.0772 18.6662 14.8292C18.4182 14.5812 18.2775 14.2457 18.2745 13.895C18.2714 13.5442 18.4063 13.2064 18.6499 12.9541L24.3925 7.21146H19.5957Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
