import React from "react";

export default function Body() {
  let body = {
    height: "2000px",
    /* background: "yellow", */
  };
  return (
    <>
      <div className="column is-10">
        <div className="column is-5">
          <div class="notification is-warning">
            <button class="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
            ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
            fringilla. Nullam gravida purus diam, et dictum{" "}
            <a>felis venenatis</a> efficitur.
          </div>
        </div>
        <div className="column is-5">
          <div class="notification is-warning">
            <button class="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
            ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
            fringilla. Nullam gravida purus diam, et dictum{" "}
            <a>felis venenatis</a> efficitur.
          </div>
        </div>
      </div>
    </>
  );
}
