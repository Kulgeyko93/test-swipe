/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./time.scss";

const Time = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    setTimeout(() => setTime(new Date().toLocaleString()), 1000);
  }, [time]);

  return <div className='timer'>{time}</div>;
};

export default Time;
