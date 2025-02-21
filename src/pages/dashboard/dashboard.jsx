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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("healthy");

  const toggleModal = () => setIsOpen((prev) => !prev);

  const healthyPlants = [root, stem, shoot, one, one, two];
  const unhealthyPlants = [root,cactus,cactus2, cactus1, ];

  return (
    <>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
        <SidebarButton icon={<FaLeaf />} />
        <SidebarButton icon={<FaSmoking />} />
        <SidebarButton icon={<FaHeart />} onClick={toggleModal} />
        <SidebarButton icon={<FaSignOutAlt />} />
      </div>

      {isOpen && <HealthModal onClose={toggleModal} />}

      <div className="flex cold py-2 justify-center mt-4">
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
