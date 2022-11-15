import React, { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import Popup from "../../components/popup/Popup";
import Navbar from "../navbar/Navbar";
import "./myabout.scss";
function MyAbout() {
  const [openImage, setOpenImage] = useState({
    open: false,
    name: "",
  });
  const [imageName, setImageName] = useState(false);
  const ViewWork = (e) => {
    console.log(e.target);
    setOpenImage({
      open: !openImage.open,
      name: e.target.getAttribute("name"),
    });
  };
  useEffect(() => {
    const myname = document.querySelector(".myabout__myname");
    const myphoto = document.querySelector(".myabout__myphoto");
    const myself = document.querySelector(".myabout__content").childNodes;
    const contentLine = document.querySelectorAll(".myabout__content-top");
    setTimeout(() => {
      myname.classList.add("myabout-visible");
      myphoto.classList.add("myabout-visible");
    }, 100);

    const photos = document.querySelector(
      ".myabout__content-photos__context"
    ).childNodes;

    const myscroll = (e) => {
      myself.forEach((child) => {
        if (window.innerHeight - 100 > child.getBoundingClientRect().top) {
          child.classList.add("slideshow");
        } else {
          child.classList.remove("slideshow");
        }
      });
      contentLine.forEach((child, idx) => {
        if (window.innerHeight - 100 > child.getBoundingClientRect().top) {
          idx % 2 === 0
            ? child.classList.add("top-line-move1")
            : child.classList.add("top-line-move2");
        } else {
          idx % 2 === 0
            ? child.classList.remove("top-line-move1")
            : child.classList.remove("top-line-move2");
        }
      });
      photos.forEach((child) => {
        if (
          window.innerHeight - child.getBoundingClientRect().height / 2 >
          child.getBoundingClientRect().top
        ) {
          child.classList.add("pictures");
        } else {
          child.classList.remove("pictures");
        }
      });
    };
    window.addEventListener("scroll", myscroll);
    return () => {
      window.removeEventLienter("scroll", myscroll);
    };
  });
  return (
    <div className="myabout">
      <Popup open={openImage} close={setOpenImage} />
      <div className="myabout__myname">
        <span className="cursive">Jeonghui Cheon</span>
        <div style={{ "--draw": "2.7s" }}></div>
        <div style={{ "--draw": "3.1s" }}></div>
        <div style={{ "--draw": "3.3s" }}></div>
        <div style={{ "--draw": "3.5s" }}></div>
        <div style={{ "--draw": "3.7s" }}></div>
      </div>
      <div className="myabout__myphoto">
        <div style={{ "--draw": "2.5s" }}></div>
        <div style={{ "--draw": "0.5s" }}></div>
        <div style={{ "--draw": "1s" }}></div>
        <div style={{ "--draw": "1.5s" }}></div>
        <div style={{ "--draw": "2s" }}></div>
      </div>
      <div className="myabout__content">
        <div className="myabout__content-myself">
          <div className="myabout__content-myself__top myabout__content-top"></div>
          <div className="myabout__content-myself__context">
            <div className="myabout__content-myself__left">
              <h1>About the developer</h1>
            </div>
            <div className="myabout__content-myself__right">
              <div className="myabout__content-myself__right-topcontent">
                <h2>Formal Education</h2>
                <p>Daegu Hanny University - Bachelor of Cosmetic Science</p>
                <p>Incheon Ilbo Academy (Bootcamp)</p>
              </div>
              <div className="myabout__content-myself__right-bottomcontent">
                <h2>Who I am ?</h2>
                <p>
                  I am a Front-end Developer located in Nsw of Australia. But i
                  am from Korea. I just moved to Australia on 21th of July 2022.
                  I am seriously interested in user interaction to provide a
                  nice experience to users. It's very fun to challenge new
                  interaction and to learn for me.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="myabout__content-moreabout">
          <div className="myabout__content-moreabout__top myabout__content-top"></div>
          <div className="myabout__content-moreabout__context">
            <div className="myabout__content-moreabout__context-left">
              <h1>Random facts about me</h1>
              <p>
                I would love to listen to korean balade music and watch a marvel
                movie. I used to go to coin Karaoke alone in Korea at least once
                a week. Singing is the most my favourite hobby even though i
                can't sing well. I go to a gym everyday to refresh my brain and
                take care of my best condition. I also find interesting in clone
                project and learn from a new skills that i don't know of.
              </p>
            </div>
            <div className="myabout__content-moreabout__context-right">
              <div></div>
            </div>
          </div>
        </div>
        <div className="myabout__content-photos">
          <div className="myabout__content-photos__top myabout__content-top"></div>
          <h1 className="myabout__content-photos__title"> My Work</h1>
          <div className="myabout__content-photos__context">
            <div
              className="myabout__content-photos__context-div"
              style={{ "--delay": "1" }}
            >
              <div
                className="myabout__content-photos__context-div__box first"
                name="utoo"
                onClick={(e) => {
                  ViewWork(e);
                }}
              >
                <p>U.TOO</p>
                <p>Mobile App</p>
              </div>
            </div>
            <div
              className="myabout__content-photos__context-div"
              style={{ "--delay": "2" }}
            >
              <div
                className="myabout__content-photos__context-div__box second"
                name="spec"
                onClick={(e) => {
                  ViewWork(e);
                }}
              >
                <p>SPEC</p>
                <p>Mobile App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyAbout;
