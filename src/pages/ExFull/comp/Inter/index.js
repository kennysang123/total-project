import React, { useEffect } from "react";
import classNames from "classnames/bind";
import "./s.css";

export default function Inter() {
  useEffect(() => {
    /* show card elements */
    const cards = document.querySelectorAll(".cardz");
    console.log("ca:", cards);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          /* disable hide element */
          /* if (entry.isIntersecting) observer.unobserve(entry.target); */
        });
        console.log(entries);
      },
      { rootMargin: "-100px" }
    );

    const lastCardObserver = new IntersectionObserver((entries) => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      get10Card();
      lastCardObserver.unobserve(lastCard.target);
      lastCardObserver.observe(document.querySelector(".cardz:last-child"));
    }, {});
    lastCardObserver.observe(document.querySelector(".cardz:last-child"));

    cards.forEach((card) => {
      observer.observe(card);
    });
    const cardContainer = document.querySelector(".card-container");
    function get10Card() {
      console.log("add 10 cards");
      for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("cardz");
        observer.observe(card);
        cardContainer.append(card);
      }
    }
    return () => {};
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="cardz show">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a card</div>
        <div className="cardz">This is a last card</div>
      </div>
    </>
  );
}
