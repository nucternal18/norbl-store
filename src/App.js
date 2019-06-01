import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // eslint-disable-next-line
import LeatherCase from './Images/LeatherCase.jpg'
import Layout from './Components/Layout/Layout';
import NavBar from './Components/NavBar/NavBar';
import Catalogue from './Components/Catalogue/Catalogue';
import Cart from './Components/Cart';
import ContactForm from './Components/ContactForm/ContactForm';
import AboutUs from './Components/AboutUs'
import DefaultError from './Components/ErrorPage/DefaultError';



class App extends React.Component {
  
  render () {
    return (
      <Router>
        <div className="carousel">
            <NavBar />
            <Switch>
              <Route path="/catalogue" component={Catalogue} />
              <Route path="/contact_us" component={ContactForm} />
              <Route path="/about_us" component={AboutUs} />
              <Route path="/cart" component={Cart} />
              <Route path="/" exact component={Layout} />
              <Route component={DefaultError} />
            </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
