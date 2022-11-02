import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavButton from "../../components/navbutton/NavButton";

import "./navbar.scss";
function Navbar() {
  useEffect(() => {
    const top = document.querySelector(".nav__logo-box__top");
    const middle = document.querySelector(".nav__logo-box__middle");

    const bottom = document.querySelector(".nav__logo-box__bottom");

    top.classList.add("top-move");
    middle.classList.add("middle-move");
    bottom.classList.add("bottom-move");

    const liArr = document.querySelectorAll(".nav_list");
    liArr.forEach((li, idx) => {
      li.style.setProperty("--i", idx);
    });

    const nav = document.querySelector(".nav");
    let lastScrollPos;
    window.addEventListener("scroll", (e) => {
      if (-70 > nav.getBoundingClientRect().top) {
        if (lastScrollPos > document.documentElement.scrollTop) {
          //nav.classList.remove("nav-sticky-gone");
          nav.classList.add("nav-sticky");
        }
      }

      if (lastScrollPos < document.documentElement.scrollTop) {
        nav.classList.remove("nav-sticky");
        // nav.classList.add("nav-sticky-gone");
      }
      lastScrollPos = document.documentElement.scrollTop;
    });
  });
  const toggleHandler = (e) => {
    const toggleMenu = document.querySelector(".nav__content-togglemenu__bar");
    const toggleContent = document.querySelector(
      ".nav__content-togglemenu__content"
    );
    const nav = document.querySelector(".nav");

    toggleMenu.classList.toggle("active");
    toggleContent.classList.toggle("open");
    nav.classList.toggle("nav-togglemenu-open");
  };
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <div className="nav__logo-box">
            <div className="nav__logo-box__top"></div>
            <div className="nav__logo-box__middle"></div>
            <div className="nav__logo-box__bottom"></div>
          </div>
          <Link to="/">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 218 105"
              className="nav_myname"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="218" height="105" fill="none" />
              <path
                d="M45.8619 17.0702C48.9288 17.0702 47.0505 14.8396 45.5755 11.9816C41.9848 5.02456 35.1331 5.18375 30.6179 9.82871C20.5091 20.2283 13.0004 45.8059 13.0004 63.2524C13.0004 76.8373 12.7468 100.081 25.1518 99.9998C29.3823 99.972 33.5398 92.5302 36.3104 88.5444C41.2203 81.4812 45.0976 73.9998 48.706 65.3776C55.8358 48.3415 60.6129 30.2164 65.664 11.7541C65.9856 10.5783 69.004 2.53993 68.4386 5.75281C67.2786 12.3437 65.4397 18.8761 63.9959 25.3497C60.6333 40.4266 57.2277 55.4277 54.1572 70.6438C52.4985 78.8633 50.5188 87.0785 47.3474 94.3268C43.0005 104.262 55.3 73.6837 60.2837 64.4236C64.8088 56.0157 69.4732 41.6941 78.1734 43.4874C84.204 44.7305 63.0602 94.3725 79.6152 93.4823C83.5588 93.2703 87.8832 85.9986 90.617 82.4195C94.8256 76.9095 100.595 71.9983 103.53 64.763C105.588 59.6924 108.889 49.2248 106.271 43.2955C102.91 35.6847 97.6112 48.6039 96.003 52.2023C91.4443 62.4024 87.7688 83.9839 97.2907 90.741C103.838 95.387 111.254 79.7777 114.366 73.5143C118.116 65.9682 123.069 59.7974 127.772 53.59C130.414 50.1036 133.85 44.9137 137.408 43.6096C139.408 42.876 142.184 45.0758 143.346 47.3984C143.716 48.1377 144.648 53.4821 144.924 53.4821C147.394 53.4821 142.371 45.2838 141.363 44.7625C134.145 41.0322 128.149 51.2814 125.296 60.0147C121.586 71.3729 116.925 85.4714 126.356 93.924C134.599 101.311 146.729 74.7222 146.842 65.058C146.89 60.8956 145.48 56.5158 144.82 52.4148C144.497 50.4055 142.493 48.8564 142.335 47.5483C142.204 46.4551 145.374 47.1222 145.729 47.2739C150.61 49.3635 156.295 47.2552 161.047 45.4001C163.61 44.3995 166.966 37.5984 165.055 44.7483C163.369 51.0576 161.009 56.9436 159.233 63.204C157.063 70.8526 155.785 79.2453 152.697 86.267C148.4 96.04 154.724 81.848 156.094 79.3443C163.722 65.4132 172.068 53.3517 183.801 47.3952C188.815 44.8499 188.706 46.8816 186.436 53.7216C183.673 62.0492 177.109 79.2762 181.058 88.6158C184.803 97.4712 202.803 73.0112 205 70.0395"
                stroke="#aec6cf"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="nav__content">
          <div className="nav__content-menucontent">
            <NavButton destination={"/about"} context={"about"} />
            <NavButton destination={"/resume"} context={"resume"} />
            <NavButton destination={"/contact"} context={"contact"} />
          </div>
          <div className="nav__content-togglemenu">
            <div
              style={{
                width: "20px",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
              onClick={(e) => {
                toggleHandler(e);
              }}
            >
              <div className="nav__content-togglemenu__bar"></div>
              <div className="nav__content-togglemenu__content">
                <p>Menu bar</p>
                <ul>
                  <li className="nav_list">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav_list">
                    <Link to="/resume">Resume</Link>
                  </li>
                  <li className="nav_list">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
