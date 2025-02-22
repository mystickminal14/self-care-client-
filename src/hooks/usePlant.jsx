import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context";
const usePlant = (url) => {
 
  const {setGoodPlants, setBadPlants, isLoading, setIsLoading } = useContext(AppContext);
  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const goodPlant= response?.data.filter((value)=> value['plantType']==="Good")
      const badPlant= response?.data.filter((value)=> value['plantType']==="Bad")
      console.log(goodPlant)
      console.log(badPlant)
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
  return { isLoading, handleData };
};

export default usePlant;
