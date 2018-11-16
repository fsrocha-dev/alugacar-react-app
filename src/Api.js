import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadBrands = () => api.get('brands')
export const saveCar = (newCar) => api.post('cars', newCar)
export const loadCarsByBrand = (brand) => api.get('cars?brand='+brand)
export const deleteCars = (id) => api.delete('cars/'+id)

const apis = {
    loadBrands: loadBrands,
    saveCar: saveCar,
    loadCarsByBrand: loadCarsByBrand,
    deleteCars: deleteCars
}

export default apis
