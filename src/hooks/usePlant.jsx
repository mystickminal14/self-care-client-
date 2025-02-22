import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context";
const usePlant = (url) => {
  const { setGoodPlants, setBadPlants,refresh, isLoading, setIsLoading } =
    useContext(AppContext);
  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(refresh,response)
      const goodPlant = response?.data.filter(
        (value) => value["plantType"] === "Good"
      );
      const badPlant = response?.data.filter(
        (value) => value["plantType"] === "Bad"
      );
      setGoodPlants(goodPlant);
      setBadPlants(badPlant);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [url, setIsLoading]);
  useEffect(() => {
    handleData();
  }, [url, handleData]);
  useEffect(() => {
    if (refresh) {
      handleData();
    }
  }, [refresh, handleData]);
  return { isLoading,refetch: handleData };
};

export default usePlant;
