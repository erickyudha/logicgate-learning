import { React, useState, useEffect } from "react";

export default function CountdownBar(props) {
    const { countdown = 0 } = props;
    const [seconds, setSeconds ] =  useState(countdown);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(myInterval)
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
            <progress className="countdown-bar" value={seconds} max={countdown}></progress>
    )
}