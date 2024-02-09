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

    //Will render one question and show/hide answer when span is clicked
    const renderQuestion = (question) => {
        const onClick = () => {
            setCurrentId(question.id);
            setShowAnswer(!showAnswer);
        }

        return (
            <div key={question.id}>
                <p>
                    <span onClick={onClick}>
                        {showAnswer ? (<i className="fas fa-angle-up bg-black"></i>) : (<i className="fas fa-angle-down m-1 bg-black"></i>)}
                    </span>{question.question}
                </p>
                {currentId === question.id && showAnswer === true && (<p>{question.answer}</p>) }
            </div>
        )

    }

    return(
        <div>
            <div>
                <div>
                    <h1>FAQ</h1>
                    <p>
                        {faqs.map(renderQuestion)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FaqComp;