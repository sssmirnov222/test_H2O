import React, { FC, useState } from "react";
import style from "./Reports.module.scss";
import Report from "../Report/Report";
import yes from "../../image/yes.png";
import no from "../../image/no.png";
import revenue from "../../image/revenue.png";
import expenses from "../../image/expenses.png";
import profit from "../../image/profit.png";
import arrears from "../../image/arrears.png";
import itog from "../../image/itog.png";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Reports = ({ report }) => {
  console.log(
    report[0].amount,
    Number(report[1].amount),
    Number(report[2].amount)
  );
  const data = [
    { name: "Янв", value: report[0].amount },
    { name: "Фев", value: Number(report[1].amount) },
    { name: "Мар", value: report[2].amount },
    { name: "Апр", value: report[0].amount },
    { name: "Май", value: Number(report[1].amount) },
    { name: "Июнь", value: report[2].amount },
    { name: "Июль", value: report[1].amount },
    { name: "Авг", value: report[0].amount },
    { name: "Сент", value: Number(report[1].amount) },
    { name: "Окт", value: report[2].amount },
    { name: "Ноя", value: report[0].amount },
    { name: "Дек", value: report[1].amount },
  ];

  return (
    <div className={style.reports}>
      <div>
        <div className={style.reports__reportMap}>
          {report.map((report) => (
            <div>
              <Report report={report} />
            </div>
          ))}
        </div>

        <div className={style.chart}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <section className={style.chart__finance}>
            <article>
              <div>
                <img src={revenue} alt="revenue" />
                <span>Выручка</span>
              </div>

              <div>
                <span>{report[0].amount}</span>
              </div>
            </article>
            <article>
              <div>
                <img src={expenses} alt="expenses" />
                <span>Затраты</span>
              </div>

              <div>
                <span>{report[0].amount}</span>
              </div>
            </article>
            <article>
              <div>
                <img src={profit} alt="profit" />
                <span>Прибыль</span>
              </div>

              <div>
                <span>{report[0].amount}</span>
              </div>
            </article>
            <article>
              <div>
                <img src={arrears} alt="arrears" />
                <span>Задолженность</span>
              </div>

              <div>
                <span>{report[0].amount}</span>
              </div>
            </article>
            <article>
              <div>
                <img src={itog} alt="itog" />
                <span>Итог</span>
              </div>

              <div>
                <span>{report[0].amount}</span>
              </div>
            </article>
          </section>
        </div>
      </div>

      <section className={style.problemAreas}>
        <h3 className={style.problemAreas__header}>Проблемные зоны</h3>
        <article>
          <img src={no} alt="" />
          <div>
            <span>Линейный персонал</span>
            <strong>300 3670</strong>
          </div>
        </article>
        <article>
          <img src={no} alt="" />
          <div>
            <span>Подразделение фазовых работ ФОТ</span>
            <strong>901 470</strong>
          </div>
        </article>

        <article>
          <img src={no} alt="" />
          <div>
            <span>Бензин (наличные)</span>
            <strong>278 325</strong>
          </div>
        </article>

        <article>
          <img src={yes} alt="" />
          <div>
            <span>Закупка инвентаря</span>
            <strong>44 742</strong>
          </div>
        </article>

        <article>
          <img src={yes} alt="" />
          <div>
            <span>Закупка спецодежды/СИЗ</span>
            <strong>16810</strong>
          </div>
        </article>

        <article>
          <img src={yes} alt="" />
          <div>
            <span>Ремонт оборудования</span>
            <strong>28 570</strong>
          </div>
        </article>

        <article>
          <img src={yes} alt="" />
          <div>
            <span>Обслуживание автомобиля</span>
            <strong>47 868</strong>
          </div>
        </article>

        <article>
          <img src={yes} alt="" />
          <div>
            <span>Форс-мажоры</span>
            <strong>13750</strong>
          </div>
        </article>

        <article>
          <img src={no} alt="" />
          <div>
            <span>Рекламные бюджеты(Блогеры)</span>
            <strong>101 500</strong>
          </div>
        </article>

        <article>
          <img src={no} alt="" />
          <div>
            <span>Рекламные бюджеты(Контекст)</span>
            <strong>200 000</strong>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Reports;
