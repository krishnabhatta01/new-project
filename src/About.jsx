import React from "react";
import Common from "./Common";
import {NavLink} from "react-router-dom";
import web from "../src/image/about.jpg";
const About =() =>{
    return(
        <>
            <Common name="Welcome to about page" imgsrc={web} visit="/Contact" btname="Contact "/>
        </>
    );
};
export default About;