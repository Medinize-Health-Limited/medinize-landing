import React, { useEffect, useState } from "react";
import './Faq.css';



const RenderQuestion = ({question, answer}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <div className="">
            <div className="border-b-[.1rem] md:pb-5 pb-3 md:w-[80%] mx-auto">
                <div className = 'md:w-[100%] md:w-[100%] md:mt-8 mt-6'>
                    <div className="">
                        <p className ={showAnswer ? 'md:text-[13px] font-semibold text-[14.5px] text-[#358E07] flex flex-row justify-between' : 'md:text-[13px] font-semibold text-[#454343] text-[14.5px] flex flex-row justify-between'}>
                            {question}
                            <button onClick={() => setShowAnswer(!showAnswer)} className="">
                                {showAnswer ? <img src="./images/minuss.png" className="w-4"/> : <img src="./images/pluss.png" className="h-4 w-4"/> }
                            </button>               
                        </p>
                    </div>
                    {showAnswer && <p className= 'md:w-[90%] text-[#454343] md:text-[13px] text-[14.5px] mt-4 md:leading-[24px] leading-[20px]'>{answer}</p>}
                </div>
            </div>
        </div>
    )
}

export default RenderQuestion;