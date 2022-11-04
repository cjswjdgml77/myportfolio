import React, { useState, useEffect, useRef } from "react";
import "./resume.scss";
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const download = useRef();
  const container = useRef();
  let mousestop;
  const InnerClick = (e) => {
    clearTimeout(mousestop);
    const innerCircle = document.querySelector(
      ".resume__container-innercircle"
    );
    const outerCircle = document.querySelector(
      ".resume__container-outercircle"
    );
    outerCircle.classList.add("outercircle-ani");
  };
  const MouseEnter = (e) => {
    const outerCicle = document.createElement("span");
    outerCicle.classList.add("resume__container-outercircle");
    outerCicle.style.setProperty("--outer-top", `${e.pageY}px`);
    outerCicle.style.setProperty("--outer-left", `${e.pageX}px`);
    container.current.appendChild(outerCicle);

    const innerCircle = document.createElement("span");
    innerCircle.classList.add("resume__container-innercircle");
    innerCircle.style.setProperty("--inner-top", `${e.pageY}px`);
    innerCircle.style.setProperty("--inner-left", `${e.pageX}px`);
    //innerCircle.addEventListener("click", InnerClick);
    container.current.appendChild(innerCircle);
  };
  const MouseLeave = (e) => {
    const outerCicle = document.querySelector(".resume__container-outercircle");
    outerCicle.remove();
    const innerCircle = document.querySelector(
      ".resume__container-innercircle"
    );
    innerCircle.remove();
  };
  const MouseMove = (e) => {
    clearTimeout(mousestop);
    const innerCircle = document.querySelector(
      ".resume__container-innercircle"
    );
    if (!innerCircle) return;
    innerCircle.style.setProperty("--inner-top", `${e.pageY}px`);
    innerCircle.style.setProperty("--inner-left", `${e.pageX}px`);

    const outerCircle = document.querySelector(
      ".resume__container-outercircle"
    );
    if (!outerCircle) return;
    outerCircle.style.setProperty("--outer-top", `${e.pageY}px`);
    outerCircle.style.setProperty("--outer-left", `${e.pageX}px`);
    innerCircle.style.width = "3%";
    outerCircle.style.width = "5%";
    mousestop = setTimeout(() => {
      console.log(e.pageY);
      let clear;
      const mychildArea = document.querySelectorAll(".child-area");
      mychildArea.forEach((child) => {
        console.log(child.getBoundingClientRect().top);
        if (
          child.getBoundingClientRect().top + window.pageYOffset < e.pageY &&
          child.getBoundingClientRect().bottom + window.pageYOffset > e.pageY &&
          child.getBoundingClientRect().left < e.pageX &&
          child.getBoundingClientRect().right > e.pageX
        ) {
          innerCircle.style.width = "50%";
          outerCircle.style.width = "60%";
          clear = true;
          return;
        }
      });

      if (clear) return;
      innerCircle.style.width = "0%";
      outerCircle.style.width = "0%";
    }, 2000);
  };
  useEffect(() => {
    const myscroll = window.addEventListener("scroll", () => {
      const download = document.querySelector(".resume__download");
      const side = document.querySelectorAll(".resume__side");
      if (download.getBoundingClientRect().bottom < 0) {
        side.forEach((myside, idx) => {
          myside.style.visibility = "visible";
          myside.style.top = window.pageYOffset + window.innerHeight / 2 + "px";
          idx === 0
            ? myside.classList.add("move-left")
            : myside.classList.add("move-right");
        });
      } else {
        side.forEach((myside, idx) => {
          myside.style.visibility = "hidden";
          idx === 0
            ? myside.classList.remove("move-left")
            : myside.classList.remove("move-right");
        });
      }
    });
    setTimeout(() => {
      container.current.childNodes.forEach((child, idx) => {
        child.style.setProperty("--delay", `${250 * idx}ms`);
      });
      container.current.classList.add("show");
    }, 100);

    return () => {
      window.removeEventListener("scroll", myscroll);
    };
  });
  return (
    <div className="resume">
      <div className="resume__download">
        <a href="document.pdf" target="_blank" ref={download}>
          Download
        </a>
      </div>
      <div className="resume__side left">
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "100ms" }}
        >
          D
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "200ms" }}
        >
          o
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "300ms" }}
        >
          w
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "400ms" }}
        >
          n
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "500ms" }}
        >
          l
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "600ms" }}
        >
          o
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "700ms" }}
        >
          a
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "800ms" }}
        >
          d
        </a>
      </div>
      <div className="resume__side right">
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "100ms" }}
        >
          D
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "200ms" }}
        >
          o
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "300ms" }}
        >
          w
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "400ms" }}
        >
          n
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "500ms" }}
        >
          l
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "600ms" }}
        >
          o
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "700ms" }}
        >
          a
        </a>
        <a
          href="document.pdf"
          target="_blank"
          ref={download}
          style={{ "--delay": "800ms" }}
        >
          d
        </a>
      </div>
      <div
        className="resume__container"
        ref={container}
        onMouseEnter={(e) => {
          MouseEnter(e);
        }}
        onMouseLeave={(e) => {
          MouseLeave(e);
        }}
        onMouseMove={(e) => {
          MouseMove(e);
        }}
      >
        <h1>Jeonghui Cheon</h1>
        <h3>Front-End Developer</h3>
        <div className="resume__info">
          <a className="child-area" href="mailto:cjswjdgml123@gmail.com">
            cjswjdgml123@gmail.com
          </a>
          <p className="child-area">0492 258 717</p>
          <p className="child-area">Ingleburn, NSW</p>
          <a
            className="child-area"
            href="https://github.com/cjswjdgml77/myportfolio"
            target="_blank rel=opener"
          >
            Github
          </a>
        </div>
        <div className="resume__headline">
          <h2 className="child-area">WORK EXPERIENCE</h2>
        </div>
        <div className="resume__workname">
          <h3 className="child-area">KB – Front-End Developer</h3>
        </div>
        <div className="resume__date">
          <h4 className="child-area">January 2022 – July 2022</h4>
          <h4 className="child-area">Yeouido, Republic of Korea</h4>
        </div>
        <div className="resume__content">
          <ul>
            <li className="child-area">
              Worked with 4 design members, 7 front-end members and 4 back-end
              members to develop easy stock investment for use mobile
              application.
            </li>
            <li className="child-area">
              Build auto trading service to help trading for user.
            </li>
            <li className="child-area">
              Created stocks ranking charts and details UI to cooperating with
              the design team.
            </li>
            <li className="child-area">
              Assisted in building 100% reusable code and libraries for future
              use.
            </li>
            <li className="child-area">
              Ensured the technical feasibility of 150+ UI/UX designs.
            </li>
            <li className="child-area">
              Created user account info page and validated 100% of user input
              before submitting to the back-end.
            </li>
          </ul>
        </div>
        <div className="resume__workname">
          <h3 className="child-area">Eugine – Front-End Developer</h3>
        </div>
        <div className="resume__date">
          <h4 className="child-area">May 2021 – December 2021</h4>
          <h4 className="child-area">Yeouido, Republic of Korea</h4>
        </div>
        <div className="resume__content">
          <ul>
            <li className="child-area">
              Worked with design, product, and back-end teams to create stock
              sharing mobile application.
            </li>
            <li className="child-area">
              Created open banking service for better user experience with the
              bank open api.
            </li>
            <li className="child-area">
              Created real time my account page , and pie chart to show user
              sharing holders.
            </li>
            <li className="child-area">
              Participated in product releases and code reviews with 3 senior
              developers and team leads.
            </li>
            <li className="child-area">
              Ensured the technical feasibility of 150+ UI/UX designs.
            </li>
            <li className="child-area">
              Supervised, led, and mentored 11 junior team members to achieve
              high performance and meet goals.
            </li>
          </ul>
        </div>
        <div className="resume__headline">
          <h2 className="child-area">EDUCATION</h2>
        </div>
        <div className="resume__education">
          <h3 className="child-area">Daegu Hanny University</h3>
          <p>-</p>
          <p className="child-area">
            Bachelor of Cosmetic Science, Cosmetic Science
          </p>
        </div>
        <div className="resume__date">
          <p className="child-area">Feburary 2012 – August 2020</p>
          <p className="child-area">Gyeongsan-si, Republic of Korea</p>
        </div>
        <div className="resume__education">
          <h3 className="child-area">Incheon Ilbo Academy (bootcamp)</h3>
          <p>-</p>
          <p className="child-area">software ,hardware full stack course</p>
        </div>
        <div className="resume__date">
          <p className="child-area">November 2020 – May 2021</p>
          <p className="child-area">Incheon , Republic of Korea</p>
        </div>
        <div className="resume__headline">
          <h2 className="child-area">SKILL</h2>
        </div>
        <div className="resume__content">
          <ul>
            <li className="child-area">HTML</li>
            <li className="child-area">CSS</li>
            <li className="child-area">JavaScript</li>
            <li className="child-area">React.js</li>
            <li className="child-area">Bootstrap</li>
            <li className="child-area">Git</li>
            <li className="child-area">NPM</li>
            <li className="child-area">Jira</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
