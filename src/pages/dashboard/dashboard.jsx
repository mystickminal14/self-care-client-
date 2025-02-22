import React, { useContext, useState } from "react";
import {
  FaAppleAlt,
  FaSkullCrossbones,
  FaHeart,
  FaSignOutAlt,
  FaGuilded,
} from "react-icons/fa";
import HealthModal from "../../components/popup/Health";
import FoodModal from "../../components/popup/Food";
import ToxicModal from "../../components/popup/Toxic";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { CircularProgressbar } from 'react-circular-progressbar';
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

//dead plants
import RedWithering from "../../assets/goodPlant/red_Withering_Flower.png";
import RedWithered from "../../assets/goodPlant/red_Withered_Flower.png";
import YellowWithering from "../../assets/goodPlant/yellow_Withering_Flower.png";
import YellowWithered from "../../assets/goodPlant/yellow_Withered_Flower.png";
import pinkWithering from "../../assets/goodPlant/pink_Withering_Flower.png";
import pinkWithered from "../../assets/goodPlant/pink_Withered_Flower.png";
import purpleWithering from "../../assets/goodPlant/purple_Withering_Flower.png";
import purpleWithered from "../../assets/goodPlant/purple_Withered_Flower.png";
import orangeWithering from "../../assets/goodPlant/orange_Withering.png";
import orangeWithered from "../../assets/goodPlant/orange_Withered_Flowe.png";
import FinalWitheringDEAD from "../../assets/goodPlant/Final_Withered_Flower.png";
import "./dash.css";
import useGet from "../../hooks/useGet";
import useDelete from "../../hooks/useDelete";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import usePlant from "../../hooks/usePlant";
import GuideModal from "../../components/popup/Guide";
import { FaHeartPulse } from "react-icons/fa6";
import { green } from "@mui/material/colors";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("healthy");
  const {
    goodPlants,
    badPlants,
    activeModal,
    activeSidebar,
    setActiveSidebar,
    toggleModal,
    setActiveModal,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const { handleDelete } = useDelete("/auth/logout");
  const { handleData } = usePlant("/garden");
  const healthy = {
    G1: {
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
      9: red,
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
  const healthAndAge = {
    G1: {
      1: FinalWitheringDEAD,
      2: RedWithered,
      3: RedWithered,
      4: RedWithering,
      5: RedWithering,

    },

    G2: {
      1: FinalWitheringDEAD,
      2: YellowWithered,
      3: YellowWithered,
      4: YellowWithering,
      5: YellowWithering,
    },
    G3: {
      1: FinalWitheringDEAD,
      2: pinkWithered,
      3: pinkWithered,
      4: pinkWithering,
      5: pinkWithering,
    },
    G4: {
      1: FinalWitheringDEAD,
      2: orangeWithered,
      3: orangeWithered,
      4: orangeWithering,
      5: orangeWithering,
    },
    G5: {
      1: FinalWitheringDEAD,
      2: purpleWithered,
      3: purpleWithered,
      4: purpleWithering,
      5: purpleWithering,
    },
    G6: {
      1: FinalWitheringDEAD,
      2: YellowWithered,
      3: YellowWithered,
      4: YellowWithering,
      5: YellowWithering,
    },
  };
  const unHealthy = {
    B1: {
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
  const checkValue = (plant, health, age) => {
    if (healthy[plant]) {
      if (health > 5) {
        return healthy[plant][age] || root;

      }
      return healthAndAge[plant][health] || root;
    }
    return root;
  };

  const [age, setAge] = useState('');
  const life = (age) => {
    switch (true) {
      case age === 1 || age === 2:
        return 'Seed';
      case age === 3 || age === 4:
        return 'Shoot';
      case age === 5 || age === 6:
        return 'Steam';
      case age === 7 || age === 8:
        return 'Bud';
      case age === 9 || age === 10:
        return 'Flower';
      default:
        return 'Unknown';
    }
  };


  const checkUnhealthy = (plant, health, age) => {
    if (unHealthy[plant]) {
      console.log(unHealthy[plant][health])
      return unHealthy[plant][health] || root;
    }
    return root;
  };
  const handleLogout = async () => {
    try {
      const check = await handleDelete();
      if (check) navigate("/");
      else alert("Logout failed. Please try again.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
        <a
          data-tooltip-id="food-tooltip"
          data-tooltip-content="Food"
          data-tooltip-place="right"
        >
          <SidebarButton
            icon={<FaAppleAlt />}
            isActive={activeSidebar === "food"}
            onClick={() => toggleModal("food")}
          />
        </a>
        <Tooltip id="food-tooltip" variant="success" />
        <a
          data-tooltip-id="toxic-tooltip"
          data-tooltip-content="Toxic"
          data-tooltip-place="right"
        >
          <SidebarButton
            icon={<FaSkullCrossbones />}
            isActive={activeSidebar === "toxic"}
            onClick={() => toggleModal("toxic")}
          />
        </a>
        <Tooltip id="toxic-tooltip" variant="success" />
        <a
          data-tooltip-id="health-tooltip"
          data-tooltip-content="Health"
          data-tooltip-place="right"
        >
          <SidebarButton
            icon={<FaHeart />}
            isActive={activeSidebar === "health"}
            onClick={() => toggleModal("health")}
          />
        </a>
        <Tooltip id="health-tooltip" variant="success" />
        <a
          data-tooltip-id="guide-tooltip"
          data-tooltip-content="Guide"
          data-tooltip-place="right"
        >
          <SidebarButton
            isActive={activeSidebar === "guide"}
            onClick={() => toggleModal("guide")}
            icon={<FaGuilded />}
          />
        </a>

        <Tooltip id="guide-tooltip" variant="success" />
        <a
          data-tooltip-id="logout-tooltip"
          data-tooltip-content="Logout"
          data-tooltip-place="right"
        >
          <SidebarButton onClick={handleLogout} icon={<FaSignOutAlt />} />
        </a>

        <Tooltip id="logout-tooltip" variant="success" />
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
      {activeModal === "guide" && (
        <GuideModal onClose={() => toggleModal(null)} />
      )}

      {/* Tab Buttons */}
      <div className="flex fixed left-36 py-2 justify-center mt-4 bg-transparent">
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
          {activeTab === "unhealthy" ? badPlants.map((plantData, index) => (
            <div key={index} className="plant">
              <img
                src={checkUnhealthy(plantData.plant, plantData.age)}
                alt={`Unhealthy Plant ${index + 1}`}
              />
              <h1>{plantData.prompt}</h1>
            </div>
          )) : goodPlants.map((plantData, index) => {
            const healthPercentage = (plantData.health / 10) * 100; // Convert health to percentage
            return (
              <div key={index} className="plant relative">
                <img
                  src={checkValue(plantData.plant, plantData.health, plantData.age)}
                  alt={`Healthy Plant ${index + 1}`}
                  className="absolute -top-6"
                />
                <div className="w-52 bg-transparent absolute top-40 -left-2">
                  <div className="relative w-full mb-2 group"> {/* Added 'group' here */}
                    <div style={{ width: "50px", height: "50px", margin: "0 auto" }} className="relative bg-white rounded-full">

                      {/* Icon with hover trigger */}
                      <div className="absolute top-4 left-4 cursor-pointer">
                        {plantData.prompt === 'Health' ? <FaHeart /> : plantData.prompt === 'Toxic' ? <FaSkullCrossbones /> : <FaAppleAlt />}
                      </div>

                      {/* Hidden div that appears on hover */}
                      <div className="w-52 pt-9 bg-white/80 rounded-xl pb-8 pr-4 -left-20 absolute -top-20 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        <div className="relative w-full mb-2">
                          <div className="absolute -top-8 left-6">{plantData.prompt}</div>
                          <div className="absolute top-2 left-6 text-lg">{life(plantData.age)}</div>
                          <div
                            className="absolute top-0 left-3 w-full h-2 rounded glass-progress"
                            style={{
                              width: `${healthPercentage}%`,
                              backgroundColor: healthPercentage > 50 ? 'green' : 'red',
                            }}
                          ></div>
                          <span
                            className="absolute top-0 left-2/3 transform -translate-x-1/2 text-black text-xs font-semibold"
                            style={{ top: '-20px' }}
                          >
                            {Math.round(healthPercentage)}%
                          </span>
                        </div>
                      </div>

                      {/* Circular Progress Bar */}
                      <CircularProgressbar
                        value={healthPercentage}
                        styles={{
                          path: {
                            stroke: healthPercentage <= 20 ? 'blue' : healthPercentage <= 40 ? 'lightblue' : healthPercentage <= 60 ? 'red' : healthPercentage <= 80 ? 'lightgreen' : 'green',
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })
          }
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
