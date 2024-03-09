import React from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Output from "./pages/Output";
import { logo } from "./assets";

let App = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className=" w-full h-[100vh] sm:w-[1300px]">
        <nav className="w-full h-[3rem]  bg-[#fff]  shadow-lg flex items-center justify-between ">
          <img src={logo} alt="logo" className="w-36 object-contain " />
        </nav>
        <section>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Auth />} />
              <Route path="/home" element={<Home />} />
              <Route path="/CreatePost" element={<CreatePost />} />
              <Route path="/Output" element={<Output />} />
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
};

export default App;
