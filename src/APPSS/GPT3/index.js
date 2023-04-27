import React from "react";
import "./index.css";
import { Navbar, Article, Brand, CTA } from "./comp";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

const GPT3 = () => {
  return (
    <>
      <div className="GPT3">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default GPT3;
