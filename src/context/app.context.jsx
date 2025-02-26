import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
  const [health, setHealth] = useState([]);
  const [refresh, setRefreshData] = useState(false);
  const [regular, setRegular] = useState([]);
  const [occasional, setOccasional] = useState([]);
  const [toxic, setToxic] = useState([]);
  const [goodPlants, setGoodPlants] = useState([]);
  const [badPlants, setBadPlants] = useState([]);

  const[modelFood,setModelFood]=useState([])
  const[modelHealth,setModelHealth]=useState([])
  const[modelToxic,setToxicModel]=useState([])
  const[activeModal, setActiveModal]=useState([])
  const [activeSidebar, setActiveSidebar] = useState(null);
  const toggleModal = (modalName) => {
    setActiveModal((prev) => (prev === modalName ? null : modalName));
    setActiveSidebar((prev) => (prev === modalName ? null : modalName));
  };


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
    <AppContext.Provider value={{activeSidebar, setActiveSidebar,activeModal,toggleModal, setActiveModal,modelToxic,setToxicModel,modelFood,setModelFood,modelHealth,setModelHealth, data,refresh, setRefreshData, goodPlants,badPlants, setBadPlants, setGoodPlants,setData, showToast, setHealth, health, toxic, setToxic, regular, occasional, setOccasional, setRegular, setIsLoading, isLoading }}>
      <ToastContainer />
      {children}
    </AppContext.Provider>
  );
}
