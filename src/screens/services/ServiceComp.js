import React, { useEffect, useState } from "react";



const ServiceComp = ({icon, question, answerimg, answers, answerone, answertwo}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <div className="">
            <div className="border-b-[.1rem] border-t-[.1rem] md:py-5 py-3 md:w-[100%] mx-auto">
                <div className = 'md:w-[100%] md:mt-8 mt-6'>
                    <div className="flex flex-row justify-between items-center">
                        <img src={icon} className="h-10 w-10"/>
                        <p className ={showAnswer ? 'ml-5 w-full md:text-[30px] font-black text-[14.5px] text-[#358E07] flex flex-row justify-between' : 'ml-5 w-full md:text-[30px] font-black text-[14.5px] flex flex-row justify-between'}>
                            {question}
                            <button onClick={() => setShowAnswer(!showAnswer)} className="">
                                    {showAnswer ? <img src="./images/servicedown.png" className="w-4"/> : <img src="./images/serviceup.png" className="h-4 w-4"/> }
                            </button>               
                        </p>
                    </div>
                    {showAnswer && <div className= 'w-[97%] mx-auto my-10 md:mx-10 md:flex md:flex-row md:justify-between md:space-x-14'>
                        <img src={answerimg} className="h-[360px]"/>
                        <div className="space-y-6 md:w-[50%] md:mt-0 mt-8">
                            <p className="font-semibold md:leading-8 md:text-[20px] text-justify">{answerone}</p>
                            <p className="leading-6 md:text-[13px] text-[14.5px] text-justify">{answertwo}</p>
                            <div className="space-y-4">
                                {
                                    answers?.map((answer) => (
                                        <div className="flex flex-row items-center">
                                            <img className="h-5 w-5" src={answer.answericon}/>
                                            <p className="ml-4 md:text-[13px] text-[14.5px]">{answer.answereach}</p>
                                        </div>
                                    ))
                                }
                            </div>               
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ServiceComp;