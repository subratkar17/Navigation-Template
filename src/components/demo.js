import React from 'react';
import ReactDOM from 'react-dom';
import About from "../src/components/About"
import Clients from "../src/components/Clients"
import Contact from "../src/components/Contact"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Price from "./components/Price"
import Services from "./components/Services"


class Person extends React.Component{
    render(){ 
        return(
            <div>
            <div class="body">
            <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
                    <a href="#" class="brand">
                        <img src="../src/images/logo.png" width="120" height="40" alt="Logo" />
                        </a>
                    
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <i class="icon-menu"></i>
                    </button>
                   
                    <div class="nav-collapse collapse pull-right">
                        <ul class="nav" id="top-navigation">
                            <li class="active"><a href="#home">Home</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#clients">Clients</a></li>
                            <li><a href="#price">Price</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        <div id="da-slider" class="da-slider">
             <div class="top-cut"></div>

                 <div class="container">
             
                    <div class="back">
                        <h2>Easy management</h2>
                        <h4>Easy to use</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                             Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                             a large language ocean.</p>
                        <a href="#" class="da-link button">Read more</a>

                        <div class="da-img"><img src="../src/images/mobile.png" width="320" alt="image02"/></div>
                        </div>
                     </div>
        </div>
        </div>
        );
    }
}




const app = document.getElementById('app');
ReactDOM.render(
    <div>
    <Person />
    <About/>
    <Clients/>
    <Contact/>
    <Home/>
    <Portfolio/>
    <Price/>
    <Services/>
    </div>, app
);