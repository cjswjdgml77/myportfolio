import React, { useEffect, useRef } from "react";
import { AirplaneModel } from "../../assets/AirplaneModel";
import { Cloud } from "../../assets/Cloud";
import "./airplane.scss";
function Airplane() {
  const airplane = useRef();
  const airplaneModel = useRef();

  useEffect(() => {
    console.log("airplane render");
    const airplane__model = airplaneModel.current;
    const cloud = document.querySelectorAll(".airplane__cloud");

    const MoveAirPlane = () => {
      const parentPos = airplane.current.parentElement.getBoundingClientRect();
      //if (window.innerHeight - 45 < parentPos.top) return;
      if (window.innerHeight + 100 > parentPos.top) {
        airplane.current.classList.add("airplane-show");
      } else {
        airplane.current.classList.remove("airplane-show");
      }
      const scroll =
        window.scrollY +
        window.innerHeight +
        -70 -
        airplane.current.parentElement.offsetTop;
      const airplane_left = (window.innerWidth / parentPos.height) * scroll;
      const rotate = (scroll / window.innerHeight) * 100;
      const span = document.createElement("span");
      span.style.setProperty("--left", `${airplane_left}px`);
      airplane__model.style.left = `${airplane_left}px`;
      airplane__model.style.bottom = `${Math.random() * 100}%`;
      airplane.current.appendChild(span);
    };
    cloud.forEach((cloudElement) => {
      cloudElement.style.setProperty("--left", `${Math.random() * 100 + 70}%`);

      cloudElement.style.setProperty(
        "--bottom",
        `${(Math.random() * 100).toFixed(0)}%`
      );
      cloudElement.style.setProperty("--delay", `${Math.random() * 10 + 5}s`);
      cloudElement.style.setProperty(
        "--duration",
        `${
          (Math.random() * 5).toFixed(0) *
            (Math.random() * 5).toFixed(0) *
            (Math.random() * 5).toFixed(0) *
            (Math.random() * 10).toFixed(0) +
          100
        }s`
      );
    });
    window.addEventListener("scroll", MoveAirPlane);
    return () => {
      console.log("clean");
      window.removeEventListener("scroll", MoveAirPlane);
    };
  }, [airplane]);
  return (
    <div className="airplane" ref={airplane}>
      <div className="airplane__model" ref={airplaneModel}>
        <AirplaneModel />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
      <div className="airplane__cloud">
        <Cloud />
      </div>
    </div>
  );
}

export default Airplane;
