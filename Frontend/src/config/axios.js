import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "https://sheltered-beyond-44611.herokuapp.com/"
});

export default clienteAxios;
