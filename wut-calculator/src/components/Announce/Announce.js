import React, { useState, useEffect } from "react";

import Collapse from "../UI/Collapse/Collapse";

import classes from "./Announce.module.css";

const Announce = () => {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
  const [days, setDays] = useState("00");

  const countDownDate = new Date("Jul 5, 2021 8:30:00").getTime();

  useEffect(() => {
    const myInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 10) days = "0" + days;
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Collapse
      buttonName="Ogłoszenia"
      collapseId="collapseAnnounce"
      ariaControls="Włącz ogłoszenia"
    >
      <div className="h4 text-center">
        {days >= 0
          ? `Do wyników matury zostało: ${days}:${hours}:${minutes}:${seconds}.`
          : "Wyniki matur już są dosępne!"}
      </div>
      <div className="h8 text-center">
        {days >= 0 ? "Wyniki będą dostępne " : ""}
        <a
          className={classes.announce__href}
          href="https://wyniki.edu.pl"
          target="_blank"
          rel="noreferrer"
        >
          {days >= 0 ? "tutaj." : "Wyniki."}
        </a>
      </div>
    </Collapse>
  );
};

export default Announce;
