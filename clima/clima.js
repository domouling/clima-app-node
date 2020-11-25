const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=764aa322ab7e44e8111641e920b204bc&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}