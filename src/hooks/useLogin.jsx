import axios from "../api/BaseApi";
import React, { useContext } from "react";
import { AppContext } from '../context/app.context';

const useLogin = (url) => {
  const {data, setData,isLoading,showToast,setIsLoading} = useContext(AppContext);
  const loginUser = async () => {
    setIsLoading(true)
    try {
      const response =await axios.post(url, body);
      showToast("Login Successfull!!");
      setIsLoading(false)
      setData(response.data)
    } catch (e) {
      console.log("$e");
      setIsLoading(false)
    }
  };

  return { loginUser,isLoading };
};

export default useLogin;
