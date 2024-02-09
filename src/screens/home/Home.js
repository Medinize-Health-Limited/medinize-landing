import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import Reason from "../../components/Home/Reason/Reason";
import Service from "../../components/Home/Service/Service";
import About from "../../components/Home/About/About";
import Use from "../../components/Home/Use/Use";

const Home = () => {

    return (
        <div>
            <Hero />
            <Reason />
            <Service />
            <About />
            <Use />
        </div>
    )
}

export default Home;