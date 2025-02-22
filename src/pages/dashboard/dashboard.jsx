import React, { useContext, useState } from "react";
import { FaLeaf, FaSmoking, FaHeart, FaSignOutAlt } from "react-icons/fa";
import HealthModal from "../../components/popup/Health";
import FoodModal from "../../components/popup/Food";
import ToxicModal from "../../components/popup/Toxic";

// Healthy plants
import root from "../../assets/goodPlant/Seed.png";
import shoot from "../../assets/goodPlant/Shoot.png";
import stem from "../../assets/goodPlant/Steam.png";
import one from "../../assets/goodPlant/Yellow Bud.png";
import two from "../../assets/goodPlant/Yellow Flower.png";
import pinkBud from "../../assets/goodPlant/Pink Bud.png";
import pink from "../../assets/goodPlant/Pink Flower.png";

import purpleBud from "../../assets/goodPlant/Purple Bud.png";
import purple from "../../assets/goodPlant/Purple Flower.png";

import yellowBud from "../../assets/goodPlant/Yellow Bud.png";
import yellow from "../../assets/goodPlant/Yellow Flower.png";

import redBud from "../../assets/goodPlant/Red Bud.png";
import red from "../../assets/goodPlant/Red Flower.png";

import extOrange from "../../assets/goodPlant/Extra Orange Flower.png";
import extYellow from "../../assets/goodPlant/Extra Yellow Flower.png";
// Unhealthy plants
import growth from "../../assets/bad plants/Cactus Growth.png";
import cactusShoot from "../../assets/bad plants/Cactus Shoot.png";
import cactusSteam from "../../assets/bad plants/Cactus Steam.png";
import cactus1 from "../../assets/bad plants/Final Cactus.png";
import cactus2 from "../../assets/bad plants/Final Cactus (2).png";

import cactus3 from "../../assets/bad plants/Final Cactus (3).png";

import cactus4 from "../../assets/bad plants/Final Cactus (4).png";

import cactus5 from "../../assets/bad plants/Final Cactus (5).png";

import cactus6 from "../../assets/bad plants/Final Cactus 6.png";

import "./dash.css";
import useGet from "../../hooks/useGet";
import useDelete from "../../hooks/useDelete";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import usePlant from "../../hooks/usePlant";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("healthy");
  const [activeModal, setActiveModal] = useState(null);
  const { goodPlants, badPlants } = useContext(AppContext);
  const [activeSidebar, setActiveSidebar] = useState(null);
  const navigate = useNavigate();
  const toggleModal = (modalName) => {
    setActiveModal((prev) => (prev === modalName ? null : modalName));
    setActiveSidebar((prev) => (prev === modalName ? null : modalName));
  };

  const { handleDelete } = useDelete("/auth/logout");
  const { handleData } = usePlant("/garden");
  const healthyPlants = [root, stem, shoot, one, one, two];
  const healthy = {
    G1: [
      {
        1: root,
        2: root,
        3: shoot,
        4: shoot,
        5: stem,
        6: stem,
        7: pinkBud,
        8: pinkBud,
        9: pink,
        10: pink,
      },
    ],
    G2: {
      1: root,
      2: root,
      3: shoot,
      4: shoot,
      5: stem,
      6: stem,
      7: purpleBud,
      8: purpleBud,
      9: purple,
      10: purple,
    },

    G3: {
      1: root,
      2: root,
      3: shoot,
      4: shoot,
      5: stem,
      6: stem,
      7: yellowBud,
      8: yellowBud,
      9: yellow,
      10: yellow,
    },
    G4: {
      1: root,
      2: root,
      3: shoot,
      4: shoot,
      5: stem,
      6: stem,
      7: redBud,
      8: redBud,
      8: red,
      10: red,
    },
    G5: {
      1: root,
      2: root,
      3: shoot,
      4: shoot,
      5: stem,
      6: stem,
      7: yellowBud,
      8: yellowBud,
      9: extOrange,
      10: extOrange,
    },
    G6: {
      1: root,
      2: root,
      3: shoot,
      4: shoot,
      5: stem,
      6: stem,
      7: yellowBud,
      8: yellowBud,
      9: extYellow,
      10: extYellow,
    },
  };
  const unHealthy = {
    B1:
    {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus1,
      10: cactus1,
    },

    B2: {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus2,
      10: cactus2,
    },

    B3: {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus3,
      10: cactus3,
    },
    B4: {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus4,
      10: cactus4,
    },
    B5: {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus5,
      10: cactus5,
    },
    B6: {
      1: root,
      2: root,
      3: cactusShoot,
      4: cactusShoot,
      5: growth,
      6: growth,
      7: cactusSteam,
      8: cactusSteam,
      9: cactus6,
      10: cactus6,
    },
  };
  const checkValue = (plant, age) => {
    if (healthy[plant]) {
      return healthy[plant][age] || root;
    }
    return root;
  };

  const checkUnhealthy = (plant, age) => {
    if (unHealthy[plant]) {
      return unHealthy[plant][age] || root;
    }
    return root;
  };
  const handleLogout = async () => {
    const check = await handleDelete();
    if (check) {
      navigate("/");
    }
  };
  console.log("bad plabrts", badPlants);
  console.log("good plabrts", goodPlants);
  return (
    <>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
        <SidebarButton
          icon={<FaLeaf />}
          isActive={activeSidebar === "food"}
          onClick={() => toggleModal("food")}
        />
        <SidebarButton
          icon={<FaSmoking />}
          isActive={activeSidebar === "toxic"}
          onClick={() => toggleModal("toxic")}
        />
        <SidebarButton
          icon={<FaHeart />}
          isActive={activeSidebar === "health"}
          onClick={() => toggleModal("health")}
        />
        <SidebarButton onClick={handleLogout} icon={<FaSignOutAlt />} />
      </div>


      {activeModal === "health" && (
        <HealthModal onClose={() => toggleModal(null)} />
      )}
      {activeModal === "toxic" && (
        <ToxicModal onClose={() => toggleModal(null)} />
      )}
      {activeModal === "food" && (
        <FoodModal onClose={() => toggleModal(null)} />
      )}

    
      <div className="flex fixed left-20 py-2 justify-center mt-4 bg-transparent">
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

      <div
        className={`tab-content ${activeTab === "healthy" ? "healthy" : "unhealthy"
          }`}
      >
        <div className="flex justify-center gap-9 items-end p-9 h-screen">
          {activeTab === "unhealthy"
            ? badPlants.map((plantData, index) => (
              <div key={index} className="plant">
                <img
                  src={checkUnhealthy(plantData.plant, plantData.age)}
                  alt={`Unhealthy Plant ${index + 1}`}
                />
                <h1>{plantData.prompt}</h1>
              </div>
            ))
            : goodPlants.map((plantData, index) => (
              <div key={index} className="plant">
                <img
                  src={checkValue(plantData.plant, plantData.age)}
                  alt={`Healthy Plant ${index + 1}`}

                />
                <h1>{plantData.prompt}</h1>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

// Sidebar Button Component
const SidebarButton = ({ icon, isActive, onClick }) => (
  <button
    className={`flex curs items-center justify-center w-12 h-12 rounded-full shadow-md transition-all ${isActive
      ? "bg-green-500 text-white"
      : "bg-white bg-opacity-30 hover:bg-opacity-50"
      }`}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default Dashboard;
