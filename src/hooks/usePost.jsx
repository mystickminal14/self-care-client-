import { useContext, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context"; 

const usePost = (url, body) => {
  const { setIsLoading } = useContext(AppContext); 


  const save = async () => {
    setIsLoading(true);
    try {
      print(body);
      const response = await axios.post(url, body);
      console.log("Data saved successfully", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error saving data:", error);
      setIsLoading(false);
    }
  };

  return { save };
};

export default usePost;
