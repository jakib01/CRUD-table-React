import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import AddProduct from "./components/products/AddProducts";
import EditProduct from "./components/products/EditProduct";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Product from "./components/products/Product";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch >
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/products/add" component={AddProduct} />
                  <Route exact path="/products/edit/:id" component={EditProduct} />
                  <Route exact path="/products/:id" component={Product} />
              </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
