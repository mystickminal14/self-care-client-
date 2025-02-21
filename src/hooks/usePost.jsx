import { useContext, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/AppContext"; 

const usePost = (url, body) => {
  const { setIsLoading } = useContext(AppContext); 
  const [isLoading, setLocalLoading] = useState(false);

  const save = async () => {
    setIsLoading(true);
    setLocalLoading(true);
    try {
      const response = await axios.post(url, body);
      console.log("Data saved successfully", response.data);
      setIsLoading(false);
      setLocalLoading(false);
    } catch (error) {
      console.error("Error saving data:", error);
      setIsLoading(false);
      setLocalLoading(false);
    }
  };

  return { save, isLoading };
};

export default usePost;
