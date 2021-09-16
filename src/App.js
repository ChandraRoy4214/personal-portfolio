import React from "react"
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"

// files importing from components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//importing files from pages

import {Home, About, Projects, Contact, Error} from "./pages"
import FooterTop from "./components/FooterTop"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
{/* ======================================================= */}
          <Switch>
                <Route exact path = "/">
                    <Home/>
                    <FooterTop/>
                    <Footer/>
                </Route>
                <Route path = "/about">
                    <About/>
                    <FooterTop/>
                    <Footer/>
                </Route>
                <Route path = "/projects">
                    <Projects/>
                    <FooterTop/>
                    <Footer/>
                </Route>
                <Route path = "/contact">
                    <Contact/>
                </Route>
                <Route path = "*">
                    <Error/>
                </Route>
          </Switch>
{/* ======================================================= */}
        
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
