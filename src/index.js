import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import About from "../src/components/About"
import Clients from "../src/components/Clients"
import Contact from "../src/components/Contact"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Price from "./components/Price"
import Services from "./components/Services"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Person  extends React.Component{
    render(){
        return(
  <Router>
    <div className="section1">
      
    <div class="body">
            <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
                    <a href="#" class="brand">
                        <img src="../src/images/logo.png" width="120" height="40" alt="Logo" />
                        </a>
                    
                    
                    <div class="nav-collapse collapse pull-right">
                        <ul class="nav" id="top-navigation">
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/clients">Clients</Link></li>
                            <li><Link to="/price">Price</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
       

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/clients" component={Clients} />
      <Route path="/price" component={Price} />
      <Route path="/contact" component={Contact} />


      <div class="body">
            <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
                    <a href="#" class="brand">
                        <img src="../src/images/logo.png" width="120" height="40" alt="Logo" />
                        </a>
                    
                   
                   
                    <div class="nav-collapse collapse pull-right">
                        <ul class="nav" id="top-navigation">
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/clients">Clients</Link></li>
                            <li><Link to="/price">Price</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

  <div className="section3">
                    <h1> What We Do?</h1>
                    <p className="mollis">Duis mollis placerat quam,eget laoreet tellus tempor eu.Quisque dapibus in purus in dignissim.</p>
                    <hr></hr>
                  </div>
            <div className="imagesection4">
                <img src="src/images/sidebar.jpg" alt="sidebar"></img>
                </div>

            <div className="section8">    
              <div>  
                  <h1>Morden Design</h1>
                <h3>we create morden and clean Theme for your Business company</h3>
                  </div>
               <div>   
                    <h1>Powerfull theme</h1>
                    <h3>We Create Morden And Pwerful Theme With Lots animation and Features</h3>
                </div>   
               <div> 
                   <h1>Clean Code</h1>
                   <h3>We Create Morden And Powerful Html5 And CSS3 Code Easy For Read And Customize.</h3>
                 </div>
              </div>     
    </div>
  </Router>
        );
    }
}

export default Person;


const app = document.getElementById('app');
ReactDOM.render(
    <div>
    <Person />
    
    </div>, app
);