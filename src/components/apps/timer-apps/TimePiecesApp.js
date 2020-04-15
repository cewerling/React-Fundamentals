import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import ClockAppAustralia from './ClockAppAustralia';
import StopWatchApp from './StopWatchApp';

const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <h6>Indianapolis</h6>
                <ClockAppAustralia />
                <h6>Eucla, Western Australia</h6>
                <hr />
                <StopWatchApp />
            </div>
        </div>
    )
}

export default TimePiecesApp;