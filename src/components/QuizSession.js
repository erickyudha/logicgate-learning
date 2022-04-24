import React from "react";
import { useState, useEffect, useRef } from "react";
import QuizCountdown from "./QuizCountdown";
import QuizMain from "./QuizMain";

export default function QuizSession() {
    const [ questionStarted, setQuestionStarted ] = useState(false);
    let nowShowing = useRef(<QuizCountdown countdown={5} questionNum={1} score={9999} />);

    useEffect(()=>{
        const timer = setTimeout(() => {
            nowShowing.current = <QuizMain  
                id={1}
                withImage={false}
                imageUrl="https://www.pngkey.com/png/detail/137-1377870_canvas-sample-sample-image-url.png"
                text="QUESTION TEXT PLACEHOLDER"
                option={4}
                correct="True"
                incorrect={["Fuck This", "A", "B"]}
                duration={20}
            />;
            setQuestionStarted(true);
        }, 5000);
        return ()=> {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {nowShowing.current}
        </>
    )
}