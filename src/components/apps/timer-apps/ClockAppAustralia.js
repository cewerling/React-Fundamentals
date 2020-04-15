import React, { useState, useEffect } from 'react';

const ClockAppAustralia = () => {
    const getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString( 'en-US', {timeZone: 'Australia/Eucla' });
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
            <hr className='explanation' />
            <p>{time}</p>
        </div>
    );
}

export default ClockAppAustralia;