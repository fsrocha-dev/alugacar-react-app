import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadBrands = () => api.get('brands')
export const saveCar = (newCar) => api.post('cars', newCar)

const apis = {
    loadBrands: loadBrands,
    saveCar: saveCar
}

export default apis
