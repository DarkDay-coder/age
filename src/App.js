import React, { useState, useEffect } from "react";
import "./App.css";

const BIRTH_DATE = new Date("1996-07-06T23:55:00Z"); // Replace 'YYYY-MM-DD' with your birthdate

const SUFFER_DATE = new Date("2019-02-14T23:55:00Z"); // Replace 'YYYY-MM-DD' with your birthdate

const App = () => {
    const [age, setAge] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            const currentTime = new Date();
            const timeDiff = currentTime - BIRTH_DATE;

            const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

            const months = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24 * 365)) /
                    (1000 * 60 * 60 * 24 * 30)
            );

            const days = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
            );

            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setAge({ years, months, days, hours, minutes, seconds });
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="App">
            <h1>Hello Pashupati Dhital</h1>
            <p>
                It's been {age.years} years {age.months} months {age.days} days{" "}
                {age.hours} hours {age.minutes} minutes {age.seconds} seconds!
            </p>
            <h2>Current Time: {currentTime.toLocaleString()}</h2>
            <p> </p>
        </div>
    );
};

export default App;
