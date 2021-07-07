import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Categories from './Components/Categories/Categories.jsx';
import RandomMeal from './Components/RandomMeal/RandomMeal.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
