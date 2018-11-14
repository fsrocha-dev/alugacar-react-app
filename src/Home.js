import React, { Component } from 'react'

import api from './Api'

class Home extends Component {

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
            <a href='' className="btn btn-warning btn-lg margin-5"> {brand} </a>
          )
      }

    render(){
        return(
          <div>
            <section id="intro" className="intro-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1><img src="images/logo.png" /></h1>
                  <p>
                    <h3>Escolha abaixo a marca do veículo</h3>
                  </p>
                </div>
                  {
                    !this.state.isLoading &&
                    <div>
                      {this.state.brands.map(this.renderBrandLink)}
                    </div>
                  }
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

export default Home