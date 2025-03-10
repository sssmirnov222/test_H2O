import React from "react";
import style from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={style.App}>
      <Nav />
      <div className={style.App__main}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
