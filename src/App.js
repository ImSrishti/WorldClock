import React, { useEffect, useState } from "react";
import "./styles.css";
import ClockImg from "./images.jpeg";

function Clock({ label, seconds, hours, minutes }) {
  console.log(label, hours);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px"
      }}
    >
      <label
        style={{
          marginBottom: "30px",
          fontSize: "30px",
          fontFamily: "cursive",
          fontWeight: "bold",
          letterSpacing: "0.07em"
        }}
      >
        {label}
      </label>
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundImage: `url("${ClockImg}")`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          position: "relative"
        }}
      >
        <div
          style={{
            left: "50%",
            top: "50%",
            height: "60px",
            backgroundColor: "black",
            position: "absolute",
            width: "1px",
            transformOrigin: "bottom",
            transform: `translateY(-100%) rotate( ${6 * seconds}deg)`
          }}
        ></div>
        <div
          style={{
            left: "50%",
            top: "50%",
            height: "50px",
            backgroundColor: "black",
            position: "absolute",
            width: "2px",
            transformOrigin: "bottom",
            transform: `translateY(-100%) rotate( ${6 * minutes}deg)`
          }}
        ></div>{" "}
        <div
          style={{
            left: "50%",
            top: "50%",
            height: "40px",
            backgroundColor: "black",
            position: "absolute",
            width: "3px",
            transformOrigin: "bottom",
            transform: `translateY(-100%) rotate( ${30 * hours }deg)`
          }}
        ></div>
      </div>
    </div>
  );
}

//Implememt a clock for  India, washinton D.C and Canberra,

// India

// Australia = India  +  5 hours and 30 minutes

// Washington DC = India - 10 hours and 30 minutes

export default function App() {
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>World Time Clocks</h1>
      <Clock
        label="India"
        hours={hours % 12}
        seconds={seconds}
        minutes={minutes}
      />
      <Clock
        label="Canberra"
        hours={(hours + 5) % 12}
        seconds={seconds}
        minutes={(minutes + 30) % 60}
      />
      <Clock
        label="Washinton D.C"
        hours={Math.abs(hours - 10) % 12}
        seconds={seconds}
        minutes={(minutes - 30) % 60}
      />
    </div>
  );
}
