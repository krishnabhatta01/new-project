import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return(
        <>
        <Navbar/>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/About" component={About}/>
               <Route exact path="/Services" component={Services}/>
               <Route exact path="/Contact" component={Contact}/>
           <Home/>
           <Redirect to="/"/>
           </Switch>
           <Footer/>
        </>
    );
};
export default App;