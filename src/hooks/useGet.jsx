import React from "react";
import axios from "../api/BaseApi";
const useGet = (url) => {
  const { setData, isLoading, setIsLoading } = useContext(AppContext);
  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [url,setIsLoading]);
  return {data,isLoading};
};

export default useGet;
