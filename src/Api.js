import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadBrands = ()=> api.get('brands')

const apis = {
    loadBrands: loadBrands
}

export default apis