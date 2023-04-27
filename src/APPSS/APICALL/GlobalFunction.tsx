export class GlobalFunction {
  constructor() {}

  //----------up bds new

  async loadDataByAPI(url: string) {
    const urlsub = url;

    return await fetch(urlsub, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((err) => {
        return { "nhan fail:": err };
      });
  }
  //---------get list names photo from server return json ! fail-------------
  async getPhotoListNamesFromServer(url: string) {
    const urlsub = url;
    return await fetch(urlsub, {
      method: "GET",
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
}
