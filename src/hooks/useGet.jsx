import React, { useEffect } from "react";
import axios from "../api/BaseApi";
const useGet = (url) => {
  const { setData, isLoading, setIsLoading } = useContext(AppContext);
  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [url, setIsLoading]);
  useEffect(() => {
    handleData();
  }, [url]);
  return { data, isLoading, handleData };
};

export default useGet;
