import React from "react";

export class FuncX1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  async GetData(url, nameSheet) {
    const urlsub = url + "?n=" + nameSheet;
    console.log(urlsub);
    return await fetch(urlsub, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.log("Nhan that bai, loi: ", err));
  }
  async UpdateData(url, data) {
    const urlsub = url;
    console.log(urlsub);
    let datasend = {
      Code: JSON.stringify(data),
      Method: "PUT",
      PrivateKey: "home",
    };
    return await fetch(urlsub, {
      method: "POST",
      body: JSON.stringify(datasend),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.log("Nhan that bai, loi: ", err));
  }
  async SelectData(url, data, limitSql, pageNumber) {
    const urlsub = url;
    //console.log(urlsub);
    let datasend = {
      Code: JSON.stringify(data),
      Method: "GET",
      limitSql: limitSql,
      pageNumber: pageNumber,
      PrivateKey: "home",
    };
    return await fetch(urlsub, {
      method: "POST",
      body: JSON.stringify(datasend),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.log("Client nhan that bai: ma loi: ", err));
  }
}

/* export default function Functions() {
  return (
    <>
      <p>1</p>
    </>
  );
}
 */
