import React from "react";
import style from "./Report.module.scss";

const Report = ({ report }) => {
  return (
    <>
      <section className={style.report}>
        {/* <article className={style.report__date}>{report.date}</article>

        <article className={style.report__type}>{report.type}</article> */}
        <article className={style.report__percentages}>
          {report.percentages}%
        </article>
        <article className={style.report__amount}>{report.amount}</article>
        <article className={style.report__division}>{report.division}</article>
      </section>
    </>
  );
};

export default Report;
