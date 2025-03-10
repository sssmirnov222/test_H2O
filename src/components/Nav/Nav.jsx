import React from "react";
import style from "./Nav.module.scss";
import users from "../../image/users.png";
import setting from "../../image/setting.png";
import money from "../../image/money.png";
import events from "../../image/events.png";
import calendar from "../../image/calendar.png";
import basket from "../../image/basket.png";
import rectange from "../../image/Rectangle 405.png";
import H2O from "../../image/H2O.png";

const Nav = () => {
  return (
    <div className={style.navBar}>
      <header className={style.navBar__logo}>
        {" "}
        <img className={style.navBar__logo_H2O} src={H2O} alt="" />
      </header>
      <nav className={style.navBar__navigation}>
        <img
          className={style.navBar__navigation_calendar}
          src={calendar}
          alt="icon calendar"
        />
        <img
          className={style.navBar__navigation_events}
          src={events}
          alt="icon events"
        />
        <img
          className={style.navBar__navigation_basket}
          src={basket}
          alt="icon basket"
        />{" "}
        <img
          className={style.navBar__navigation_users}
          src={users}
          alt="icon users"
        />
        <img
          className={style.navBar__navigation_money}
          src={money}
          alt="icon money"
        />
        <img
          className={style.navBar__navigation_rectange}
          src={rectange}
          alt="icon rectange"
        />
        <img
          className={style.navBar__navigation_setting}
          src={setting}
          alt="icon setting"
        />
      </nav>
    </div>
  );
};

export default Nav;
