import React from "react";
import Footer from "../../components/Footer/Footer";
import Form from "react-bootstrap/Form";

const Contact = () => {

    return (
        <div>
                <div className="md:flex md:flex-row md:justify-between md:space-x-14 md:mt-16 mt-6 md:w-[93%] w-[87%] mx-auto">
                <img className="w-[100%] block md:hidden" src="./images/contact.png"/>
                    <div className="w-full md:mt-0 mt-6">
                        <h1 className="md:text-[2rem] text-[1.7rem] md:font-regular font-bold">Hello,</h1>
                        <p className="">Send a message, What can we do for you? </p>
                        <Form className="space-y-12 mt-10">
                            <Form.Group className="mb-3 grid space-y-4" controlId="name">
                                <Form.Label className="label md:text-[13px]">Full Name</Form.Label>
                                <input type="text" placeholder=""  required className="outline-none border-b-[0.1rem] border-gray-400"/>
                            </Form.Group>

                            <Form.Group className="mb-3 grid space-y-4" controlId="email">
                                <Form.Label className="label md:text-[13px]">Email Address</Form.Label>
                                <input type="text" placeholder=""  required className="outline-none border-b-[0.1rem] border-gray-400"/>
                            </Form.Group>

                            <Form.Group className="mb-3 grid space-y-4" controlId="message">
                                <Form.Label className="label md:text-[13px]">Your message</Form.Label>
                                <input type="text" placeholder=""  required className="outline-none border-b-[0.1rem] border-gray-400"/>
                            </Form.Group>
                        </Form>
                        <div className="flex">
                            <button className="md:w-[50%] w-[70%] mt-10 mx-auto bg-[#358E07] text-white rounded-[.4rem] px-8 md:py-[.6rem] py-[.8rem] md:text-[12px] hover:bg-[#349105e1]">
                                Submit
                            </button>
                        </div>
                    </div>
                    <img className="w-[40%] hidden md:block" src="./images/contact.png"/>
                </div>
            <div className="bg-[#e6fddb] mt-[10rem]">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;