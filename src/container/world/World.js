import React, { useEffect } from "react";
import { MyWorldMap } from "../../assets/MyWorldMap";
import { WorldMap } from "../../assets/WorldMap";
import "./world.scss";
function World() {
  useEffect(() => {
    const contactme = document.querySelector(".contactme");
    const world = document.querySelector(".world");

    const worldMap = document.querySelector(".world__worldmap");

    const worldAus = document
      .querySelector(".world__aus")
      .getBoundingClientRect();
    const top = worldAus.top - world.getBoundingClientRect().top;
    worldMap.style.setProperty("--top", `${top + worldAus.height * 0.4}px`);
    worldMap.style.setProperty(
      "--left",
      `${worldAus.left + worldAus.width * 0.8}px`
    );
    const myscroll = (e) => {
      const world = document.querySelector(".world");

      const worldPos = document.querySelector(".world").getBoundingClientRect();
      const worldMap = document.querySelector(".world__worldmap");

      //   if (world.top >= 0 && world.top < window.innerHeight) {
      //     worldMap.style.setProperty(
      //       "--top",
      //       `${worldAus.top + worldAus.height * 0.4}px`
      //     );
      //     worldMap.style.setProperty(
      //       "--left",
      //       `${worldAus.left + worldAus.width * 0.7}px`
      //     );
      //     worldMap.style.transform = `scale(${20})`;
      //   }
      //   if (worldPos.top === 0) {
      //     worldMap.style.setProperty(
      //       "--top",
      //       `${worldAus.top + worldAus.height * 0.4}px`
      //     );
      //     worldMap.style.setProperty(
      //       "--left",
      //       `${worldAus.left + worldAus.width * 0.7}px`
      //     );
      //   }
      let scale =
        1 +
        (20 / 4000) *
          (window.scrollY - contactme.offsetTop - window.innerHeight);
      worldMap.style.transform = `scale(${scale < 1 ? 1 : scale})`;
    };
    window.addEventListener("scroll", myscroll);
    return () => {
      window.removeEventListener("scroll", myscroll);
    };
  });
  return (
    <div className="world">
      {/* <WorldMap /> */}
      <MyWorldMap />
    </div>
  );
}

export default World;
