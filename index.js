import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

const app = express();
app.use(cors());

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays", (req, res) => {
  res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
  const today = dayjs().format("M/D/YYYY");
  let isTodayHoliday = false;
  let holidayName = "";
  holidays.forEach((day) => {
    if (day.date === today) {
      isTodayHoliday = true;
      holidayName = day.name;
    }
  });
  res.send(isTodayHoliday ? `Sim, hoje é ${holidayName}` : "Não, hoje não é feriado");
});

app.get("/holiday/:month", (req, res) => {
  const month = req.params.month;
  const monthHolidays = [];
  holidays.forEach((day) => {
    if (dayjs(month, "M").format("M") === dayjs(day.date, "M/D/YYYY").format("M")) {
      monthHolidays.push(day);
    }
  });
  res.send(monthHolidays);
});

app.listen(5000);
