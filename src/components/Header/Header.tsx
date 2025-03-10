import React, { useState } from "react";
import style from "./Header.module.scss";
import Kristina from "../../image/Kristina.png";
import polygon from "../../image/Polygon 6.png";
import left from "../../image/left.png";
import right from "../../image/right.png";

const Header = () => {
  const words = [
    "Свод данных по сотрудникам",
    "Сводный отчёт внутри компании",
    "Сводный отчёт по сделке",
  ];

  const [currentWord, setCurrentWord] = useState(0);

  const nextWord = () => {
    setCurrentWord((prevWord) => (prevWord + 1) % words.length);
  };

  const prevWord = () => {
    setCurrentWord((prevWord) => (prevWord - 1 + words.length) % words.length);
  };

  return (
    <header className={style.header}>
      <div className={style.header__data}>
        <div className={style.header__slider_left}>
          <img src={left} alt="" onClick={nextWord} />
        </div>
        <div className={style.header__slider_right}>
          <img src={right} alt="" onClick={prevWord} />
        </div>
        <div className={style.header__slider_content}>
          <span>{words[currentWord]}</span>
        </div>
      </div>

      <section className={style.header__profile}>
        <img src={Kristina} alt="Фотография кристины" />
        <article>
          <span className={style.header__profile_name}>Kristina</span>

          <div>
            <span className={style.header__profile_work}>Менеджер продаж</span>
            <img src={polygon} alt="" />
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;
