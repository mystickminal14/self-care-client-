import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextApp({ children }) 
{
  const [isLoading,setIsLoading]=useState();
  const [data,setData]=useState();
    return (
      <AppContext.Provider value={{data,setData,setIsLoading,isLoading}}>
        {children}
      </AppContext.Provider>
    );
  }
  