import React, { Component } from 'react'
import api from './Api'

const statuscar = {
    'busy': 'Ocupado',
    'available': 'Disponível'
}

class Cars extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          cars: [],
          isLoading: false     
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})
        api.loadCarsByBrand(this.props.match.params.brand)
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    cars: res.data
                })
            })
    }

    renderCars(cars){
        return(
            <div className="item  col-xs-3 col-lg-3">
                <div className="thumbnail">
                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                <div className="caption">
                <h4 className="group inner list-group-item-heading">
                    {cars.name}
                </h4>
                <div className="row">
                <div className="col-xs-12 col-md-6">
                  <p className="lead">
                    {cars.brand} / {statuscar[cars.status]}</p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <a className="btn btn-success" href="">Gerenciar</a>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <section id="intro" className="content intro-section">
                <h1>Carros da { this.props.match.params.brand }</h1>
                <div id="cars" className="row list-group">
                    {
                        !this.state.isLoading &&
                        this.state.cars.map(this.renderCars)
                    }
                </div>
            </section>
        )
    }
}

export default Cars
