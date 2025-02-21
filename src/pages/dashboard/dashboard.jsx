import React, { useState } from "react";
import { FaLeaf, FaSmoking, FaHeart, FaSignOutAlt } from "react-icons/fa";
import HealthModal from "../../components/popup/Health";
//healthy plants
import root from '../../assets/goodPlant/Seed.png';
import shoot from '../../assets/goodPlant/Shoot.png';
import stem from '../../assets/goodPlant/Steam.png';
import one from '../../assets/goodPlant/Yellow Bud.png';
import two from '../../assets/goodPlant/Yellow Flower.png';


// 'unhealthy'
import cactus from '../../assets/bad plants/Cactus Shoot.png';
import cactus1 from '../../assets/bad plants/Final Cactus.png';
import cactus2 from '../../assets/bad plants/Cactus Steam.png';

import "./dash.css";
import FoodModal from "../../components/popup/Food";
import ToxicModal from "../../components/popup/Toxic";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("healthy");
  const [activeModal, setActiveModal] = useState(null); // Tracks which modal is open
  const toggleModal = (modalName) => {
    setActiveModal((prev) => (prev === modalName ? null : modalName));
  };


  const healthyPlants = [root, stem, shoot, one, one, two];
  const unhealthyPlants = [root, cactus, cactus2, cactus1,];

  return (
    <>
      <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
        <SidebarButton icon={<FaLeaf />} onClick={() => toggleModal("food")} />
        <SidebarButton icon={<FaSmoking />} onClick={() => toggleModal("toxic")} />
        <SidebarButton icon={<FaHeart />} onClick={() => toggleModal("health")} />
        <SidebarButton icon={<FaSignOutAlt />} />
      </div>

      {activeModal === "health" && <HealthModal onClose={() => setActiveModal(null)} />}
      {activeModal === "toxic" && <ToxicModal onClose={() => setActiveModal(null)} />}
      {activeModal === "food" && <FoodModal onClose={() => setActiveModal(null)} />}

      <div className="flex fixed left-20 cold py-2 justify-center mt-4 bg-transparent">
        <button
          className={`tab-button ${activeTab === "healthy" ? "active" : ""}`}
          onClick={() => setActiveTab("healthy")}
        >
          Healthy Plants
        </button>
        <button
          className={`tab-button ${activeTab === "unhealthy" ? "active" : ""}`}
          onClick={() => setActiveTab("unhealthy")}
        >
          Unhealthy Plants
        </button>
      </div>

      <div className={`tab-content ${activeTab === "healthy" ? "healthy" : "unhealthy"}`}>
        <div className="flex justify-center gap-9 items-end p-9 h-screen">
          {activeTab === "healthy"
            ? healthyPlants.map((img, index) => (
              <div key={index} className="plant">
                <img src={img} alt={`Healthy Plant ${index + 1}`} />
              </div>
            ))
            : unhealthyPlants.map((img, index) => (
              <div key={index} className="plant">
                <img src={img} alt={`Unhealthy Plant ${index + 1}`} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const SidebarButton = ({ icon, onClick }) => (
  <button
    className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 shadow-md"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default Dashboard;
