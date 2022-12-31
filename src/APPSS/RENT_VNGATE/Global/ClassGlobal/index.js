export default class ClassGlobal {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  async UpdateData(Url, Data) {
    const urlsub = Url;
    let datasend = {
      Code: JSON.stringify(Data),
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
}
