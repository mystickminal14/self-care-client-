import axios from 'axios';
export default axios.create(
    {
      baseURL: `http://192.168.20.197:8080/api/`, 
      withCredential:true,
      headers:{
        'accept':'application/json',
        'Content-Type':'application/json'
      }
    }
)