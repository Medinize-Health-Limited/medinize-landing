import React, { useEffect, useState } from "react";
import './Faq.css';
import { FaCircle } from "react-icons/fa";



const FaqComp = ({question, answer}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <div className="">
             <div className = {showAnswer ? 'transition duration-400 ease-in-out bg-[#358E07] p-4 md:w-[43%] mx-auto rounded-[.5rem] w-[90%] mt-8': 'md:w-[40%] mx-auto w-[85%] mt-8'}>
             <div className="">
                <p className ={showAnswer ? 'question md:text-[13px] text-[15px] text-[#fff] border-[#fff] border-b-[.1rem] pb-3 flex flex-row justify-between' : 'question md:text-[13px] text-[15px] border-b-[.1rem] pb-3 flex flex-row justify-between'}>
                    {/* <FaCircle className="h-2 w-2 border"/> */}
                    {question}
                    <button onClick={() => setShowAnswer(!showAnswer)} className="right">
                        {showAnswer ? <img src="./images/minus.png" className="h-4 w-4"/> : <img src="./images/plus.png" className="h-4 w-4"/> }
                    </button>               
                </p>
             </div>
            {showAnswer && <p className= {showAnswer ? 'text-[#fff] md:text-[13px] text-[15px] mt-4' : ''}>{answer}</p>}
        </div>
        </div>
    )
}

export default FaqComp;