import React from "react";
import style from "./Main.module.scss";
import Reports from "../Reports/Reports";

const Main = () => {
  const report = [
    {
      division: "B2B",
      date: "2023-09-25T05:00:00.000+00:00",
      amount: 20000,
      type: "expanses",
      percentages: 21.5,
    },
    {
      division: "B2C",
      date: "2023-09-24T05:00:00.000+00:00",
      amount: "14000",
      type: "income",
      percentages: 43.7,
    },
    {
      division: "B2A",
      date: "2023-09-24T05:00:00.000+00:00",
      amount: "26000",
      type: "income",
      percentages: 13.7,
    },
  ];
  return (
    <main className={style.main}>
      <h2 className={style.main__header}>Сводный счёт</h2>
      <Reports report={report} />
    </main>
  );
};

export default Main;
