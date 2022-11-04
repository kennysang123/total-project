import React, { useState, useEffect } from "react";

export default function GetDataGoogleScript() {
  let url2 = "https://api.ipify.org/?format=json";
  const [data, setData] = useState({});
  const [url, setUrl] = useState(url2);

  let url3 =
    "https://script.google.com/macros/s/AKfycbyx94bLgARi0DKJ1k6gSdMBlGjMpnbM_gcELZmFkook2SIqOaJ3ph8VMnUhs35GyQcUMQ/exec";

  /* fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)); */
  //console.log(data2);
  async function getData(url) {
    let response = await fetch(url).then((response) => response.json());
    console.log(response);
    setData(response);
  }

  useEffect(() => {
    getData(url);
  }, []);

  function handleIP() {
    setData("Loading...");
    const url = "https://api.ipify.org/?format=json";
    getData(url);
  }
  function handleGoogle() {
    setData("Loading...");
    const url =
      "https://script.google.com/macros/s/AKfycbyx94bLgARi0DKJ1k6gSdMBlGjMpnbM_gcELZmFkook2SIqOaJ3ph8VMnUhs35GyQcUMQ/exec";
    getData(url);
  }
  const btn = {
    marginLeft: "10px",
    marginRight: "10px",
  };
  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <button className="btn btn-primary" style={btn} onClick={handleIP}>
        ip
      </button>
      <button className="btn btn-primary" style={btn} onClick={handleGoogle}>
        Google
      </button>
    </>
  );
}
