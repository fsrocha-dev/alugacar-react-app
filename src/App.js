import React, { Component } from 'react'

import api from './Api'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
     
    }

  }

  componentDidMount(){
    api.loadBrands()
      .then((res)=>console.log(res))
    
  }


  render() {
    return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo-topo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="">Cadastrar</a>
                  </li>
                </ul>
              </div>
          </div>
        </nav>

        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" /></h1>
                <p>
                  <h4>Os melhores carros das melhores marcas estão aqui !</h4>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
