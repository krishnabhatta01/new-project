import React from "react";
import {NavLink} from "react-router-dom";
import web from "../src/image/krishna.jpg";
const Common =(props) =>{
    return(
        <>
            <section id="header" className="d-flex align-items-center m-y-20">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h4>{props.name}<strong> -Krishna</strong></h4>
                                <h2>We are here to provide you designs</h2>
                            
                                    <div className="col-4 mt-3">
                                    < NavLink to={props.visit} className="button">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 justify-content-center align-items-center header-img">
                                    <img src={props.imgsrc} className="img-fluid animated w-25" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Common;