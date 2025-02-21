import axios from 'axios';
export default axios.create(
    {
      baseURL: `http://192.168.20.197:8080/api/`, 
      withCredentials:true,
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }
)