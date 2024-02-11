import React from "react";
import { faqdata } from './faqdata.js';
import RenderQuestion from './RenderQuestion.js';
import Subscribe from "../../components/Subscribe/Subscribe.js";
import Footer from "../../components/Footer/Footer.js";

const Faq = () => {

    return (
        <div>
            <div className="md:mt-12 mt-6 w-[95%] mx-auto">
                <h1 className="md:text-[3rem] md:text-center text-[1.6rem] text-[#358E07] w-[90%] mx-auto font-black">FAQs</h1>
                <div className="md:grid md:grid-cols-2 md:gap-6 w-[90%] mx-auto mt-4">
                    {
                        faqdata?.map((question) => {
                            return(
                                <RenderQuestion key={question.id} {...question} />
                            )
                        })
                    }
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Faq;