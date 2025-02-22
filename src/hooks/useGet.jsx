import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context";
const useGet = (url) => {
  const [newData, SetNewData] = useState();
  const { setData, isLoading, setIsLoading } = useContext(AppContext);
  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      SetNewData(response.data);
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
  return { newData, isLoading, handleData };
};

export default useGet;
