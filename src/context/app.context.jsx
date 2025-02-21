import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
export const AppContext = createContext();
const ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
export default function ContextApp({ children }) {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState();


  const showToast = (message, type = "default") => {
    switch (type) {
      case "warn":
        toast.warn(message, ToastOptions);
        break;
      case "success":
        toast.success(message, ToastOptions);
        break;
      case "error":
        toast.error(message, ToastOptions);
        break;
      case "info":
        toast.info(message, ToastOptions);
        break;
      default:
        toast(message, ToastOptions);
        break;
    }
  };

  return (
    <AppContext.Provider value={{ data, setData, showToast, setIsLoading, isLoading }}>
      <ToastContainer />
      {children}
    </AppContext.Provider>
  );
}
