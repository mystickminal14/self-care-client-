import React, { useCallback, useContext, useState } from "react";
import axios from "../api/BaseApi";
import { AppContext } from "../context/app.context";
import useHandleError from "./useHandleError";

const useDelete = (url) => {
  const [responseMessage, setResponseMessage] = useState();
  const { setIsLoading, showToast } = useContext(AppContext);
  const handleError = useHandleError();
  const handleDelete = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.delete(url);
      console.log(response.data); 
      setResponseMessage(response.data);

      return true;
    } catch (error) {
      console.log(error);
      handleError(error.message || "An error occurred during logout");
      setIsLoading(false);
      return false;
    }
  }, [url, setIsLoading]);

  return { responseMessage, handleDelete };
};

export default useDelete;
