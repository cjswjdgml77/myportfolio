import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import MySelf from "../myself/MySelf";
import MyTimeLine from "../mytimeline/MyTimeLine";
import ContactMe from "../contactme/ContactMe";
import Australia from "../australia/Australia";
import World from "../world/World";

function Home() {
  useEffect(() => {
    const scroll = (e) => {
      const myself = document.querySelector(".myself");
      const myselfChild = myself.childNodes;

      const contactme = document.querySelector(".contactme");
      const contactmeChild = contactme.childNodes;

      const mytimeline = document.querySelector(".mytimeline");

      const australia = document.querySelector(".australia");
      const australiaBox = document.querySelector(".australia__box");
      const australiaTitle = document.querySelector(".australia__title");
      const australiaAirplane = document.querySelector(".australia__airplane");
      const australiaSubtitle = document.querySelector(".australia__subtitle");
      // if (window.innerHeight > myself.getBoundingClientRect().top) {
      //   airplaneArr[0].classList.add("airplane-show");
      // } else {
      //   airplaneArr[0].classList.remove("airplane-show");
      // }
      myselfChild.forEach((child, idx) => {
        child.style.setProperty("--delay", idx);
        if (window.innerHeight - 100 > child.getBoundingClientRect().top) {
          child.classList.add("myselfcontent-show");
        } else if (
          window.innerHeight - 300 <
          child.getBoundingClientRect().top
        ) {
          child.classList.remove("myselfcontent-show");
        }
      });

      // if (window.innerHeight > mytimeline.getBoundingClientRect().top) {
      //   mytimeline.classList.add("mytimeline-animation");
      // } else {
      //   mytimeline.classList.remove("mytimeline-animation");
      // }

      // if (window.innerHeight > contactme.getBoundingClientRect().top) {
      //   airplaneArr[2].classList.add("airplane-show");
      // } else {
      //   airplaneArr[2].classList.remove("airplane-show");
      // }
      contactmeChild.forEach((child, idx) => {
        if (window.innerHeight - 100 > child.getBoundingClientRect().top) {
          child.classList.add("contactme-show");
          if (idx === 2) {
            child.classList.add("contactme-copyright-show");
          }
        } else {
          child.classList.remove("contactme-show");
        }
      });

      if (australia.getBoundingClientRect().top <= 10) {
        australia.classList.add("australia-visible");
        australiaBox.classList.add("australia-box-visible");
        australiaTitle.classList.add("australia-title-visible");
        australiaAirplane.classList.add("australia-airplane-flying");
        australiaSubtitle.classList.add("australia-subtitle-visible");
      } else {
        australia.classList.remove("australia-visible");
        australiaBox.classList.remove("australia-box-visible");
        australiaTitle.classList.remove("australia-title-visible");
        australiaAirplane.classList.remove("australia-airplane-flying");
        australiaSubtitle.classList.remove("australia-subtitle-visible");
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <MySelf />
      {/* <MyTimeLine /> */}
      <ContactMe />
      <World />
      <div style={{ width: "100%", height: "100vh" }}></div>
      <div style={{ width: "100%", height: "100vh" }}></div>
      <div style={{ width: "100%", height: "100vh" }}></div>
      <Australia />
    </div>
  );
}

export default Home;
