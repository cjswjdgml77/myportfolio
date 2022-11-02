import React, { useEffect, useRef } from "react";
import "./header.scss";
import { MyDeveloper } from "../../assets/mydeveloper";
import mywalking from "../../assets/mywalking.svg";
import myline from "../../assets/myline.svg";
import { Programming } from "../../assets/programming";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { SouthKorea } from "../../assets/SouthKorea";
import { AirplaneModel } from "../../assets/AirplaneModel";
import WaveLatter from "../../components/waveletter/WaveLatter";
import { Cloudy } from "../../assets/Cloudy";

function Header() {
  const cloudy = useRef();
  const firstLine = useRef();
  const secondLine = useRef();
  const rainy = useRef();
  useEffect(() => {
    // setTimeout(() => {
    //   const boxArr = document.querySelector(".header__right-boxgroup");
    //   boxArr.childNodes.forEach((node) => {
    //     const styleClass = node.classList[0].slice(28);
    //     node.classList.add(styleClass);
    //     node.addEventListener("mouseenter", () => {
    //       node.classList.add("border-remove");
    //       node.classList.remove(styleClass);
    //     });
    //     node.addEventListener("mouseleave", () => {
    //       node.classList.add(styleClass);
    //       node.classList.remove("border-remove");
    //     });
    //   });
    // }, 1500);
    window.addEventListener("scroll", (e) => {
      const rightContainer = document.querySelector(".header__right");
      const rightPost = rightContainer.getBoundingClientRect();
      const daegu = document.querySelector(".korea-daegu");
      const daeguPos = daegu.getBoundingClientRect();

      const airplane = document.querySelector(".header__right-airplane");
      const rightWidth = (window.innerWidth - daeguPos.left) / 70;
      const left =
        window.scrollY * rightWidth + (daeguPos.left - rightPost.left);
      airplane.style.setProperty("--top", `${daeguPos.top - rightPost.top}px`);
      airplane.style.setProperty("--left", `${left}px`);
    });
    const header = document.querySelector(".header");
    const pathEnter = document.querySelector(".header__right-korea");
    const span = document.createElement("span");
    header.appendChild(span);
    pathEnter.childNodes.forEach((path) => {
      path.addEventListener("mouseenter", (e) => {
        const targetPost = e.target.getBoundingClientRect();
        span.classList.remove("header__map-hidden");
        span.style.setProperty("--top", `${targetPost.top}px`);
        span.style.setProperty("--left", `${targetPost.left}px`);
        span.classList.add("header__map-show");
        span.innerText = e.target.getAttribute("title");
      });
      path.addEventListener("mouseleave", (e) => {
        const targetPost = e.target.getBoundingClientRect();
        span.classList.add("header__map-hidden");
      });
    });
  });
  const CloudyMove = (e) => {
    const cloudyPos = cloudy.current.getBoundingClientRect();
    const firstLinePos = firstLine.current.getBoundingClientRect();
    const secondLinePos = secondLine.current.getBoundingClientRect();
    if (e.pageY > firstLinePos.top && e.pageY < firstLinePos.bottom) {
      cloudy.current.style.setProperty(
        "--cloudy-top",
        `${e.pageY - 70 - cloudyPos.height * 1.5}px`
      );
      rainy.current.classList.add("rain-active");
    } else if (e.pageY > secondLinePos.top && e.pageY < secondLinePos.bottom) {
      rainy.current.classList.add("rain-active");
      cloudy.current.style.setProperty(
        "--cloudy-top",
        `${e.pageY - 70 - cloudyPos.height * 1.5}px`
      );
    } else {
      rainy.current.classList.remove("rain-active");
      cloudy.current.style.setProperty(
        "--cloudy-top",
        `${e.pageY - 70 - cloudyPos.height / 2}px`
      );
    }

    cloudy.current.style.setProperty(
      "--cloudy-left",
      `${e.pageX - cloudyPos.width / 2}px`
    );
  };
  return (
    <div className="header">
      <div
        className="header__left"
        onMouseMove={(e) => {
          CloudyMove(e);
        }}
        onMouseLeave={() => {
          rainy.current.classList.remove("rain-active");
        }}
      >
        <div className="header__left-cloudy" ref={cloudy}>
          <Cloudy></Cloudy>
          <div className="header__left-cloudy__rain" ref={rainy}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <CloudAndRain</CloudAndRain> */}
        <svg
          className="waveline"
          width="50"
          height="30"
          viewBox="0 0 95 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          right="0px"
        >
          <rect width="50" height="30" fill="none" />
          <path
            d="M7 47C12.4864 31.7952 22.7792 18.5625 35.4026 20.75C48.026 22.9375 45.2432 32.6838 54.3377 40.4375C63.4321 48.1912 88 40.4375 88 12"
            stroke="#0C2D48"
            strokeWidth={3}
          />
        </svg>
        <svg
          className="waveline waveline2"
          width="171"
          height="90"
          viewBox="0 0 171 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="171" height="90" fill="none" />
          <path
            d="M8 44.8897C8 41.7199 9.61895 39.299 11.0695 36.9626C14.5433 31.3678 18.2683 27.4734 23.7931 27.8463C30.1234 28.2737 35.3023 33.0578 37.3183 41.2033C39.2874 49.1593 41.109 62.091 38.0868 69.9939C35.399 77.0221 29.3806 76.3825 26.4317 69.7494C23.4681 63.083 26.932 54.6781 30.0326 49.5318C31.6225 46.8929 33.5743 42.3692 36.1638 41.3584C38.0225 40.6329 40.297 40.7511 42.2179 40.7511C46.4249 40.7511 49.5475 42.9174 51.6373 47.5747C53.1704 50.9913 55.1196 55.0458 58.606 53.6788C63.8137 51.6368 64.3851 41.3636 63.7926 35.5729C63.2388 30.1601 60.7945 26.4267 59.8245 21.2988C59.0083 16.9844 60.1792 12.063 64.0702 13.1538C76.8029 16.7229 71.0985 38.8359 71.0985 50.6665C71.0985 54.8806 71.8103 63.3934 76.5541 61.8881C81.1382 60.4334 85.2524 51.1654 87 45.9097"
            stroke="#0C2D48"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="100" cy="30" rx="10" ry="10" fill="#0C2D48" />
        </svg>
        <div className="header__left-introduce">
          <div className="header__left-introduce__firstdiv">
            <span className="header__left-introduce__firstdiv">
              Web Developer
            </span>
          </div>
          <div className="header__left-introduce__second">
            <div
              className="header__left-introduce__second-first"
              ref={firstLine}
            >
              <WaveLatter letter={"H"} />
              <WaveLatter letter={"i"} />
              <span>,</span>
              <WaveLatter letter={"I"} />
              <span>'</span>
              <WaveLatter letter={"m"} />
              <WaveLatter letter={"J"} />
              <WaveLatter letter={"e"} />
              <WaveLatter letter={"o"} />
              <WaveLatter letter={"n"} />
              <WaveLatter letter={"g"} />
              <WaveLatter letter={"h"} />
              <WaveLatter letter={"u"} />
              <WaveLatter letter={"i"} />
            </div>
            <div
              className="header__left-introduce__second-second"
              ref={secondLine}
            >
              <WaveLatter letter={"W"} />
              <WaveLatter letter={"e"} />
              <WaveLatter letter={"l"} />
              <WaveLatter letter={"c"} />
              <WaveLatter letter={"o"} />
              <WaveLatter letter={"m"} />
              <WaveLatter letter={"e"} />
              <span>.</span>
            </div>
          </div>
          <div className="header__left-introduce__third">
            <Link to="/contact"></Link>
            <MdWavingHand className="header__left-introduce__third-wavinghand" />
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-koreabox">
          <SouthKorea />
          <div className="header__right-airplane">
            <AirplaneModel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
