/* 
"Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir." 
(Steve Jobs)
*/
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Cars from './Cars'
import NewCar from './NewCar'

const About = () => <section className="intro-section"><h1>Sobre nós</h1></section>

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <Link className="navbar-brand page-scroll" to="/">
                    <img src="/images/logo-topo.png" height="30" />
                </Link>
              </div>
              <p className="navbar-text navbar-right">
                <Link to="/" className="navbar-link margin-5">Home</Link>
                <Link to="/about" className="navbar-link margin-5">Sobre</Link>
                <Link to="/newcar" className="navbar-link margin-5">Cadastrar Veículo</Link>
              </p>
            </div>
            </nav>
            <Route exact path='/' component={Home} />
            <Route exact path='/cars/:brand' component={Cars} />
            <Route exact path="/about" component={About} />
            <Route exact path='/newcar' component={NewCar} />
         
        </div>
      </Router>
    )
  }
}

export default App
