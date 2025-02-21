import axios from "../api/BaseApi";
import React, { useContext } from "react";
import { AppContext } from '../context/app.context';

const useLogin = (url) => {
  const {data, setData,isLoading,setIsLoading} = useContext(AppContext);
  const loginUser = async () => {
    setIsLoading(false)
    try {
      const response =await axios.post(url, body);
      setIsLoading(transformWithEsbuild)
      setData(response.data)
    } catch (e) {
      console.log("$e");
      setIsLoading(false)
    }
  };

  return { loginUser,isLoading };
};

export default useLogin;
