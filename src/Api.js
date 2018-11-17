import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const loadBrands = () => api.get('brands')
export const saveCar = (newCar) => api.post('cars', newCar)
export const updateCar = (cars) => api.put('cars/'+cars.id, cars)
export const loadCarsByBrand = (brand) => api.get('cars?brand='+brand)
export const deleteCars = (id) => api.delete('cars/'+id)
export const loadCarsById = (id) => api.get('cars/'+id)

const apis = {
  loadBrands: loadBrands,
  saveCar: saveCar,
  updateCar: updateCar,
  loadCarsByBrand: loadCarsByBrand,
  deleteCars: deleteCars,
  loadCarsById: loadCarsById
}

export default apis
