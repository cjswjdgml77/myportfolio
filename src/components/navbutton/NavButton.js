import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbutton.scss";
function NavButton({ destination, context }) {
  let location = useLocation();
  const navbutton = useRef();
  useEffect(() => {
    if (destination === location.pathname) {
      navbutton.current.classList.add("navbutton__active");
    } else {
      navbutton.current.classList.remove("navbutton__active");
    }
  }, [location]);
  return (
    <div className="navbutton" ref={navbutton}>
      <Link className="navbutton__link" to={destination}>
        {context}
      </Link>
    </div>
  );
}

export default NavButton;
