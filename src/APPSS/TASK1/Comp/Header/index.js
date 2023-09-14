import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function Header() {
  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Ngu" },
    { id: 3, title: "Ngu 3" },
    { id: 4, title: "Ngu 4" },
  ];
  return (
    <>
      <nav className={cx("w-full flex py-6 items-center navbar", "id1")}>
        <div className={cx(" justify-between items-center", "wrapper")}>
          <div className={cx("logoLeft")}>Logo 200x200</div>
          <div className={cx("rightIcon")}>Icon</div>
        </div>
      </nav>
      <br></br>
      {/* <nav
        className={cx(
          "w-full flex py-6 justify-between items-center navbar",
          "navBar"
        )}
      >
        <img
          src="https://azco.vn/wp-content/uploads/2019/11/thumb-logo-la-gi.jpg"
          alt="hoobank"
          className="w-[124px] h-[32px] "
        />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navItems.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-poppins font-normal text-[16px] ${
                index === navItems.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-center items-center"></div>
      </nav> */}
    </>
  );
}
