import React, { Component } from 'react'
import api from './Api'

const statuscar = {
    'busy': 'Ocupado',
    'available': 'Disponível'
}

class NewCar extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          brands: [],
          isLoading: false     
        }
        this.saveCar = this.saveCar.bind(this)
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

    saveCar(){
        const newCar = {
            name: this.refs.name.value,
            brand: this.refs.brand.value,
            status: this.refs.status.value,
            valueday: this.refs.valueday.value
        }

        console.log(newCar)

   
    }

    render(){
        return(
            <section className="intro-section">
                <h1>Cadastrar veículo</h1>
                      <form>
                        Nome: <input type="text" ref='name' className="form-control" /><br />
                        Marca: 
                            <select ref='brand'>
                                { 
                                    this.state.brands
                                        .map( key => <option key={key} value={key}>{ key }</option>) 
                                }
                            </select>
                        <br />
                          Disponibilidade: 
                            <select ref='status'>
                                { 
                                    Object
                                        .keys(statuscar)
                                        .map( key => <option key={key} value={key}>{statuscar[key]}</option>) 
                                }
                            </select>
                            <br />
                        Valor: <input ref='valueday' type="text" className="form-control" /><br />
                        <button type="button" onClick={this.saveCar} >Cadastrar Veículo</button>
                      </form>
            </section>
        )
    }
}

export default NewCar
