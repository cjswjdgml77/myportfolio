import React, { useCallback, useEffect, useRef, useState } from "react";
import "./waveletter.scss";
function WaveLatter({ letter }) {
  const [myInterval, setMyInterval] = useState();
  const waveletter = useRef();
  useEffect(() => {
    if (!waveletter.current.style.getPropertyValue("--1")) {
      waveletter.current.style.setProperty(`--${1}`, "1");
      waveletter.current.style.setProperty(`--${2}`, "1");
      waveletter.current.style.setProperty(`--${3}`, "1");
      waveletter.current.style.setProperty(`--${4}`, "1");
      waveletter.current.style.setProperty(`--${5}`, "1");
      waveletter.current.style.setProperty(`--${6}`, "1");
      waveletter.current.style.setProperty(`--${7}`, "1");
      waveletter.current.style.setProperty(`--${8}`, "1");
    }
  });
  const MakeWaver = () => {
    //polygon(0% 100%, 0 94%, 12% 91%, 30% 90%, 46% 94%,
    // 56 % 96 %, 78 % 97 %, 90 % 95 %, 100 % 93 %, 100 % 100 %)
    const interval = setInterval(() => {
      if (waveletter.current.style.getPropertyValue("--1") > 100) {
        waveletter.current.style.setProperty(`--${1}`, "1");
        waveletter.current.style.setProperty(`--${2}`, "1");
        waveletter.current.style.setProperty(`--${3}`, "1");
        waveletter.current.style.setProperty(`--${4}`, "1");
        waveletter.current.style.setProperty(`--${5}`, "1");
        waveletter.current.style.setProperty(`--${6}`, "1");
        waveletter.current.style.setProperty(`--${7}`, "1");
        waveletter.current.style.setProperty(`--${8}`, "1");
      }
      waveletter.current.style.setProperty(
        `--1`,
        `${Number(waveletter.current.style.getPropertyValue("--1")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--2`,
        `${Number(waveletter.current.style.getPropertyValue("--2")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--3`,
        `${Number(waveletter.current.style.getPropertyValue("--3")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--4`,
        `${Number(waveletter.current.style.getPropertyValue("--4")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--5`,
        `${Number(waveletter.current.style.getPropertyValue("--5")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--6`,
        `${Number(waveletter.current.style.getPropertyValue("--6")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--7`,
        `${Number(waveletter.current.style.getPropertyValue("--7")) + 1}`
      );
      waveletter.current.style.setProperty(
        `--8`,
        `${Number(waveletter.current.style.getPropertyValue("--8")) + 1}`
      );
    }, 100);
    setMyInterval(interval);
    // for (let i = 50; i >= 0; i--) {
    //   setTimeout(() => {
    //     waveletter.current.style.setProperty(`--${1}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${2}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${3}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${4}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${5}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${6}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${7}`, `${i}%`);
    //     waveletter.current.style.setProperty(`--${8}`, `${i}%`);
    //   }, 1000 + i * 100);
    // }
  };
  const StopWaver = () => {
    clearInterval(myInterval);
  };
  return (
    <div
      className="waveletter"
      onMouseEnter={() => {
        MakeWaver();
      }}
      onMouseLeave={() => {
        StopWaver();
      }}
    >
      <span className="waveletter__letter1" style={{ "--letter": "sfds" }}>
        {letter ? letter : "W"}
      </span>
      <span className="waveletter__letter2" ref={waveletter}>
        {letter ? letter : "W"}
      </span>
    </div>
  );
}

export default WaveLatter;
