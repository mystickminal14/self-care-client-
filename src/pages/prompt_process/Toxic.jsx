import React, { useContext, useState } from "react";
import BlockTitle from "../../components/button/block-title";
import Buttons from "../../components/button/button";
import { AppContext } from "../../context/app.context";
import usePost from "./../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

const Toxic = () => {
  const { health, regular, occasional } = useContext(AppContext);
  const toxicFoods = [
    "Smoking",
    "Alcohol",
    "Cigarettes",
    "Tobacco",
    "Cocaine",
    "Heroin",
    "Vape",
    "Hookah",
  ];
  const navigate = useNavigate();

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSelection = (food) => {
    setSelectedFoods((prevSelected) =>
      prevSelected.includes(food)
        ? prevSelected.filter((item) => item !== food)
        : [...prevSelected, food]
    );
  };

  const { save } = usePost("/garden/initiate", {
    regular: regular,
    occasional: occasional,
    healthPrompt: health,
    toxicPrompt: selectedFoods,
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const check = await save();
    setIsLoading(false);
    if (check) navigate("/dashboard");
  };

  return (
    <div className="background flex justify-center items-center text-black bg-slate-800 h-full sm:h-screen">
      <div
        className={`bg-sign-up max-w-xl w-[90%] h-auto flex flex-col rounded-lg shadow-lg p-5 relative ${isLoading ? "bg-opacity-50" : "bg-white"
          }`}
      >

        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75">
            <ClockLoader color="#ffffff" size={100} aria-label="Loading Spinner" />
          </div>
        ) : (
          <>
            <div className="p-2">
              <h1 className="text-black-800 text-2xl font-bold w-full p-3 text-start">
                Select the Toxic Substances:
              </h1>
              <div className="flex flex-wrap gap-2">
                {toxicFoods.map((food, index) => (
                  <BlockTitle
                    key={index}
                    title={food}
                    isSelected={selectedFoods.includes(food)}
                    onClick={() => toggleSelection(food)}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Buttons onAdd={handleSubmit} disabled={isLoading}>
                {isLoading ? "Saving..." : "Submit"}
              </Buttons>
            </div>
          </>
        )}
      </div>
    </div >
  );
};

export default Toxic;
