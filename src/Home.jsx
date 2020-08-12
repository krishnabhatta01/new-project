import React from "react";
import {NavLink} from "react-router-dom";
import web from "../src/image/krishna.jpg";
import Common from "./Common";
const Home =() =>{
    return(
        <>
          <Common name="growing business" imgsrc={web} visit="/Services" btname="get started"/>
        </>
    );
};
export default Home;