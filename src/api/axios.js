import axios from 'axios'

const KEY = '318ab712cbmsh0461ef11414b501p1d02dejsnfcebc4753e98'
const HOST = 'currency-exchange.p.rapidapi.com'

export default axios.create({
    baseURL: 'https://currency-exchange.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': HOST
    }
})