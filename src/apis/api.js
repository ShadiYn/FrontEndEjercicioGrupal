import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:8080'});

export const getEvents = async ()=> await instance.get('/cosas');