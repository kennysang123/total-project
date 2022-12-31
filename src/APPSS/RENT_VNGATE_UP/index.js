import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function RENT_VNGATE_UP() {
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const data = {
    code: code,
    price: price,
  };
  console.log("data", data);
  const Code = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Code</span>
            <input
              type="text"
              className="form-control"
              placeholder="Code"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Type = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Type</span>
            <input
              type="text"
              className="form-control"
              placeholder="Type"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Street = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Street</span>
            <input
              type="text"
              className="form-control"
              placeholder="Le Duan Str"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Dist = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Dist</span>
            <input
              type="text"
              className="form-control"
              placeholder="Binh Thanh Dist"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const City = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">City</span>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Project = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Project</span>
            <input
              type="text"
              className="form-control"
              placeholder="Project"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Utilities = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Utilities</span>
            <input
              type="text"
              className="form-control"
              placeholder="Utilities"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Duration = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Duration</span>
            <input
              type="text"
              className="form-control"
              placeholder="2022-12-22"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Content = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Content</span>
            <input
              type="text"
              className="form-control"
              placeholder="Content"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Price = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Area = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Area</span>
            <input
              type="text"
              className="form-control"
              placeholder="Area"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Bath = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Bath</span>
            <input
              type="text"
              className="form-control"
              placeholder="Bath"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Bed = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Bed</span>
            <input
              type="text"
              className="form-control"
              placeholder="Bed"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const Owner = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Owner</span>
            <input
              type="text"
              className="form-control"
              placeholder="Owner"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  const CodeHost = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">CodeHost</span>
            <input
              type="text"
              className="form-control"
              placeholder="CodeHost"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("RENT_VNGATE_UP")}>
        <div className="container">
          <div className="row">
            {Code()}
            {Type()}
            {Street()}
            {Dist()}
            {City()}
            {Project()}
            {Utilities()}
            {Duration()}
            {Content()}
            {Price()}
            {Area()}
            {Bath()}
            {Bed()}
            {Owner()}
            {CodeHost()}
          </div>
        </div>
      </div>
    </>
  );
}
