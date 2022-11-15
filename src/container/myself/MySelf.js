import React, { useEffect, useRef, useState } from "react";
import Airplane from "../../components/airplane/Airplane";
import MySelfContent from "../../components/myselfcontent/MySelfContent";
import "./myself.scss";
function MySelf() {
  const MoreBtnHandler = () => {
    setMyContent([
      ...mycontent,
      { title: "java", delay: "1" },
      { title: "hello", delay: "2" },
    ]);
  };
  const [mycontent, setMyContent] = useState([
    {
      title: "Intro to Css 3D transforms",
      content:
        "With the introduction of CSS transforms, elements could be shifted...",
      link: "https://3dtransforms.desandro.com/",
    },
    {
      title: "JavaScript Top-level await",
      content:
        "ES2020 introduced the top-level await feature that allows a module to behave...",
      link: "https://www.javascripttutorial.net/javascript-top-level-await",
    },
    {
      title: "Concurrent Rendering in React 18",
      content:
        "In the context of React.js, concurrency refers to having more...",
      link: "https://www.telerik.com/blogs/concurrent-rendering-react-18",
    },
    {
      title: "Gatsby",
      content:
        "Gatsby enables developers to build fast, secure, and powerful websites using a React-based framework...",
      link: "https://www.gatsbyjs.com/why-gatsby",
    },
    {
      title: "MongoDB",
      content:
        "This guide shows you how to create an application that uses the MongoDB Node.js...",
      link: "https://www.mongodb.com/docs/drivers/node/current/quick-start/",
    },
  ]);
  useEffect(() => {
    const myselfbox = document.querySelectorAll(".mycards-box");
    myselfbox.forEach((element) => {
      element.style.setProperty("--windowWidth", `${window.innerWidth / 2}px`);
      element.childNodes.forEach((child) => {
        child.style.setProperty("--top", `${Math.random() * 100}%`);
        child.style.setProperty("--left", `${Math.random() * 100}%`);
      });
    });
  }, [window.innerWidth, mycontent]);
  return (
    <div className="myself">
      <Airplane />
      {mycontent.map((content, idx) => (
        <MySelfContent
          key={idx}
          title={content.title}
          delay={content.delay}
          content={content.content}
          link={content.link}
        />
      ))}
      {/* <div
        className="myself__morebutton"
        onClick={() => {
          MoreBtnHandler();
        }}
      >
        5+
      </div> */}
    </div>
  );
}

export default MySelf;
