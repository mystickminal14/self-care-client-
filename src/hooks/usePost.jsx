import axios from "../api/BaseApi";
import React, { useCallback } from "react";

const usePost = (url, body) => {
  const { isLoading, setIsLoading } = useContext(AppContext);

  const save = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, body);
      console.log("Data saved successfull");
      showToast("showToast")
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return { save, isLoading };
};

export default usePost;
