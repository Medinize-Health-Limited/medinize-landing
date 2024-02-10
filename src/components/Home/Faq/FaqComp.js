import React, { useEffect, useState } from "react";
import './Faq.css';
import { faqs } from './Faqs.js';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const FaqComp = () => {
    // States to control toggle effect on faq
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    // Will render one question and show/hide answer when span is clicked
    const renderQuestion = (question) => {
        const onClick = () => {
            setCurrentId(question.id);
            setShowAnswer(!showAnswer);
        }

        return (
            <div key={question.id} className="border w-[38%] mx-auto">
                <div className="border flex flex-row justify-between">
                    <p>{question.question}</p>
                    <span onClick={onClick}>
                        {showAnswer ? (<img src="./images/minus.png" className=""></img>) : (<img src="./images/plus.png" className=""></img>)}
                    </span>
                </div>
                {currentId === question.id && showAnswer === true && (<p>{question.answer}</p>) }
            </div>
        )

    }

    return(
        <div>
            <div className="mt-6">
                {faqs.map(renderQuestion)}
            </div>
        </div>
    )
}

export default FaqComp;