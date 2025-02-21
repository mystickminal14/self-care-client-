import axios from "../api/BaseApi";
import React, { useCallback } from "react";

const usePost = (url, body) => {
  const {  setData, isLoading, setIsLoading } = useContext(AppContext);

  const save = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, body);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [url,setIsLoading]);

  return {save,isLoading};
};

export default usePost;
