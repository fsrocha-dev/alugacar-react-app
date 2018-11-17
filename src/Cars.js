import React, { Component } from 'react'
import api from './Api'
import { Link } from 'react-router-dom'

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
        this.renderCars = this.renderCars.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount(){
       this.loadData() 
    }

    loadData(){
        this.setState({isLoading: true})
        api.loadCarsByBrand(this.props.match.params.brand)
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    cars: res.data
                })
            })
    }

    deleteCars(id){
        api.deleteCars(id)
            .then((res) => this.loadData())
    }

    renderCars(cars){
        return(
            <div key={cars.id} className="item  col-xs-3 col-lg-3">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">{cars.name}</h4>
                        <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <p className="lead">{cars.brand} / {statuscar[cars.status]}</p>
                        </div>
                        <div className="col-xs-12 col-md-12 col-sm-12">
                        <Link className="btn btn-success" to={'/edit/car/'+cars.id}>Gerenciar</Link>
                        <a className="btn btn-danger"  onClick={() => this.deleteCars(cars.id)}>Excluir</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <section id="intro" className="intro-section">
                <div className="container">
                    <div className="row">
                        <h1>Carros da { this.props.match.params.brand }</h1>
                        {
                            this.state.isLoading &&
                            <p>Carregando, aguarde...</p>
                        }
                        {
                            !this.state.isLoading && this.state.cars.length === 0 &&
                            <div className="alert alert-info">Não há carros cadastrados</div>
                        }
                        <div className="row col-lg-12">
                            <div id="cars" className="row list-group">
                                {
                                    !this.state.isLoading &&
                                    this.state.cars.map(this.renderCars)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cars
