import React from 'react'
import image from './download.JPEG'

const Count = ({days,hours,minutes,seconds}) => {
  return (
    <div>
        <div className="count">
        <h1>Countdown Timer</h1>
        <img src={image} height="200px" width="200px"/>
        <h2>Redmi Note 8</h2>
        <h4>Rs.11,499</h4>
        <h5>Offer Ends In</h5>
        <table>
            <tbody>
                <tr className="time">
                    <th>{days}</th>&nbsp;
                    <th>{hours}</th>&nbsp;
                    <th>{minutes}</th>&nbsp;
                    <th>{seconds}</th>&nbsp;
                </tr>
                <tr className="title">
                    <th>days</th>&nbsp;
                    <th>hours</th>&nbsp;
                    <th>minutes</th>&nbsp;
                    <th>seconds</th>&nbsp;
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    
  )
}

export default Count