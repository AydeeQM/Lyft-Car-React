import React, {Component} from 'react';
import './App.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return(<div className="index">
    <section className="bienvenida">
       <div className="container-fluid">
           <div className="container">
               <div className="row">
                   <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                       <img src="http://www.whatsthefare.com/static/img/lyft_logo.png" alt="" width="150"/>
                   </div>
               </div>
           </div>
            <div className="container btn-login">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <a to="/about" className="btn btn-lg btn-block login" role="button">Log in</a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                    <div>
                    <NavLink to={"/signup"}
                             className="btn btn-lyft btn-lg btn-block"
                    >
                        Sign Up
                    </NavLink>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
 </div>);
}

export default Home;