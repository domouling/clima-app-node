const axios = require('axios');

const getLugarLatLng = async(dir) => {
    /* const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '3b996d0a86msh0a2eae8143205d7p15296bjsn5ae14b159dd9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    } */

    /* const data = resp.data.Results[0]; */

    const direccion = "New York";
    const lat = 40.75;
    const lng = -74;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}