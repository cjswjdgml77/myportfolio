import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./container/home/Home";
import Contact from "./container/contact/Contact";
import MyAbout from "./container/myabout/MyAbout";
import Navbar from "./container/navbar/Navbar";
import Resume from "./container/resume/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<MyAbout />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
