/* 
"Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir." 
(Steve Jobs)
*/
import React, { Component } from 'react'

import api from './Api'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      brands: [],
      isLoading: false     
    }

  }

  componentDidMount(){
    this.setState({ isLoading: true })
    api.loadBrands()
      .then((res)=>{
        this.setState({
          isLoading: false,
          brands: res.data
        })
      }) 
  }

  renderBrandLink(brand){
    return(
        <a href='' className="navbar-link"> {brand} &nbsp;&nbsp;</a>
      )
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

              <p class="navbar-text navbar-right">
              {
                !this.state.isLoading &&
                <div>
                  {this.state.brands.map(this.renderBrandLink)}
                  <a href="#" className="navbar-link">Cadastrar Veículo</a>
                </div>
              }
              </p>

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

        <section>
          {
            this.state.isLoading &&
            <span>Carregando...</span>
          }
        </section>
      </div>
    )
  }
}

export default App
