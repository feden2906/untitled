import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama'
})

const getCharacter = () => {
    return axiosInstance.get('/cast')
};

const getOneCharacter = (id) => {
    return axiosInstance.get(`/cast/${id}`)
};

const getInventory = () => {
    return axiosInstance.get('/inventory')
};

const getOneInventory = (id) => {
    return axiosInstance.get(`/inventory/${id}`)
};

export {getCharacter, getInventory,getOneCharacter,getOneInventory, axiosInstance}