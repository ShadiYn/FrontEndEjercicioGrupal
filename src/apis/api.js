import axios from 'axios';
const i = axios.create({
    baseURL: 'http://localhost:8080'
});

export const login = async ({username,password})=>{
    const token = btoa(username+ ':'+ password);

    console.log('ajshajshas', token);

    const response = await i.post('/login', {},{
        headers: {  
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + token
          }
        }
    );

    setAuth(token);
    return response.data;
}


const setAuth = async (token) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaa', token)
      i.defaults.headers.common.Authorization = `basic ${token}`;
  };