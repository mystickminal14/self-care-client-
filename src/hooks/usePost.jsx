import { useContext, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context"; 

const usePost = (url, body) => {
  const { setIsLoading,showToast } = useContext(AppContext); 


  const save = async () => {
    setIsLoading(true);
    try {
      
      const response = await axios.post(url, body);
      console.log("Data saved successfully", response.data);
      showToast("Data Saved Successfully!!")
      setIsLoading(false);
    } catch (error) {
      console.error("Error saving data:", error);
      setIsLoading(false);
    }
  };

  return { save };
};

export default usePost;
