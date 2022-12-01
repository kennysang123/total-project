import Global from "../Global";

const url = Global("urlgoogle");

export default class GlobalClass {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  async GetData(url, nameSheet) {
    const urlsub = url + "?n=" + nameSheet;
    //console.log(urlsub);
    return await fetch(urlsub, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        const bug = {
          dataGetedfromGoogle: json,
        };
        //console.log(bug);
        return json;
      })
      .catch((err) => console.log("Nhan that bai, loi: ", err));
  }
  async UpdateData(urlofApi, data) {
    const urlsub = urlofApi;
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
  hostLink() {
    return "host link";
  }
}
