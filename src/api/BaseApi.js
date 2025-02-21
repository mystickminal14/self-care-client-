import axios from 'axios';
export default axios.create(
    {
      baseURL,
      withCredential:true,
      headers:{
        'accept':'application/json',
        'Content-Type':'application/json'
      }
    }
)