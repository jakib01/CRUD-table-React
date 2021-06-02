import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch >
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
              </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
