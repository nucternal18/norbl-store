import React, { Component }from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // eslint-disable-next-line
import { ProductProvider } from './Context';

import Layout from './Components/Layout/Layout';
import NavBar from './Components/NavBar/NavBar';
import Catalogue from './Components/Catalogue/Catalogue';
import Cart from './Components/Cart';
import ContactForm from './Components/ContactForm/ContactForm';
import AboutUs from './Components/AboutUs'
import DefaultError from './Components/ErrorPage/DefaultError';
import ProductDetails from './Components/ProductDetails';
import Modal from './Components/Modal'



class App extends Component {
  
  
  render () {
    return (
      <Router>
        <ProductProvider>
          <div className="carousel">
            <NavBar />
            <Switch>
              <Route path="/catalogue" component={Catalogue} />
              <Route path="/contact_us" component={ContactForm} />
              <Route path="/product_details" component={ProductDetails} />
              <Route path="/about_us" component={AboutUs} />
              <Route path="/cart" component={Cart} />
              <Route path="/" exact component={Layout} />
              <Route component={DefaultError} />
            </Switch>
            <Modal />
          </div>
        </ProductProvider>
      </Router>
    );
  }
}

export default App;
