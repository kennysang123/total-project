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
        return json;
      })
      .catch((err) => console.log("Nhan that bai, loi: ", err));
  }
  async GetDataGoogle(url, nameSheet) {
    const urlsub = url + "?n=" + nameSheet;
    //console.log(urlsub);
    return await fetch(urlsub, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
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
  //----------up bds new
  async UpNewBds(urlofApi, data) {
    const urlsub = urlofApi;
    let datasend = {
      dataUp: JSON.stringify(data),
    };
    return await fetch(urlsub, {
      method: "POST",
      body: JSON.stringify(datasend),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((err) => {
        return { "nhan fail:": err };
      });
  }
  hostLink() {
    return "host link";
  }
  dateCal(dateStr) {
    let dateNow = Date.now();
    dateNow = new Date(dateNow);
    const yyyy = dateNow.getFullYear();
    const mm = dateNow.getMonth() + 1;
    const dd = dateNow.getDate();
    dateNow = new Date(yyyy, mm, dd);

    let dateLast = dateStr; // dd/mm/yyyy
    const dd2 = dateLast.substring(0, 2);
    const mm2 = dateLast.substring(3, 5);
    const yyyy2 = dateLast.substring(6, 10);
    //console.log("dlast", dd2, mm2, yyyy2);
    dateLast = new Date(yyyy2, mm2, dd2);

    const d2 = new Date();
    const d3 = Math.ceil((dateLast - dateNow) / (1000 * 60 * 60 * 24));
    //console.log("d", d3);
    const result = {
      days: d3,
    };
    if (d3 <= 0) {
      result.days = -1;
    } else {
      result.days = d3;
    }
    return result;
  }
}
