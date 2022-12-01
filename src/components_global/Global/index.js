/* import React from "react"; */

export default function Global(value) {
  switch (value) {
    case "host":
      return "http://vngate.top";
      break;
    case "url":
      return "http://vngate.top/serverphp-min/api/v1/product/";
      break;
    case "urlgoogle":
      return "https://script.google.com/macros/s/AKfycbyx94bLgARi0DKJ1k6gSdMBlGjMpnbM_gcELZmFkook2SIqOaJ3ph8VMnUhs35GyQcUMQ/exec";
      break;

    default:
      return null;
      break;
  }
}
