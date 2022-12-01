import React, { useState, useRef, useCallback } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import useBookSearch from "../useBookSearch";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function InfiniteScrolling() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      console.log("last bookRef");
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
          console.log("Visible");
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );
  //console.log(lastBookElementRef);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  const booklist = books.map((book, index) => {
    if (book.length === index + 1) {
      console.log("have more");
      return (
        <li key={v4()}>
          <div ref={lastBookElementRef}>{book}</div>
        </li>
      );
    } else {
      console.log("no more");
      return (
        <>
          <li key={v4()}>
            <div>{book}</div>
          </li>
        </>
      );
    }
  });
  function handleMore() {
    setPageNumber((prev) => prev + 1);
  }
  return (
    <>
      <p>scrolling</p>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
      <input type="text" value={query} onChange={handleSearch}></input>
      <ol>{booklist}</ol>
      <button onClick={handleMore}>moremoremoremore</button>
    </>
  );
}
