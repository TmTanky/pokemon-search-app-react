import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// Components
import Pokemons from './components/pokemon/pokemon'
import Header from './components/header/header'
import Footer from './components/footer/footer'

// Pages
import Contact from './pages/contact'

// CSS defaults
import './app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Pokemons}/> 
            <Route exact path="/contact" component={Contact}/> 
          </Switch>
        </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
