import React, { useState, useEffect } from 'react';

const ClockApp = () => {
    const getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);
        console.log(interval);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h1 classMame="section-title">React Clock</h1>
            <hr className='explanation' />
            <p>{time}</p>
        </div>
    );
}

export default ClockApp;