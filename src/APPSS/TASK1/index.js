import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import Header from "./Comp/Header";
import TextLine1 from "./Comp/TextLine1";
import Active from "./Comp/Active";
const cx = classNames.bind(styles);

export default function TASK1() {
  const styleX = {
    boxWidth: "xl:max-w-[1280px] w-wull",
    flexCenter: "flex justify-center items-center ",
    flexStart: "flex justify-center items-start ",
  };
  return (
    <>
      {/* <div className=" flex justify-center items-center">
        <div className=" w-full"> */}
      <Header />
      {/*  </div>
      </div> */}
      <TextLine1 />
      <Active />
      <Active />
    </>
  );
}
