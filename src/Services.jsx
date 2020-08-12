import React from "react";
import web from "../src/image/com.jpg"
import Cards from "./Cards";
import Sdata from "./Sdata";
const Services=() =>{
    return(
        <>
            <div className="my-5">
            <h2 className="text-center">Services</h2>
            </div>

            <div className="container-fluid mb-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
           
                        {
                            Sdata.map((val,ind) =>{
                                return <Cards key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                
                                />

                                
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};
export default Services;