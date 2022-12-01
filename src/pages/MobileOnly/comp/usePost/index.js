import React, { useState, useEffect } from "react";
import axios from "axios";
import { FuncX1 } from "../../../../Components_Shopee/Functions";
import Global from "../../../../components_global/Global";

export default function usePost(query, limitSql, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function loadData() {
      const url = Global("url");
      const FuncX1x = new FuncX1();
      const data = await FuncX1x.SelectData(url, "all", limitSql, pageNumber);
      console.log("data sau await: ", data);
      //console.log("data sau await2: ", data[0]["Code"]);
      setLoading(false);
      setPosts((prev) => {
        return [...data];
      });
    }
    loadData();
    /* setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://vd2.epizy.com/serverphp/api/v1/product/",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPosts((prev) => {
          return [...prev];
        });
        console.log(res.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel(); 
    */
  }, [query, pageNumber]);
  return { loading, posts, error, hasMore };
}
