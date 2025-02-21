import React, { useContext, useState } from "react";
import BlockTitle from "../../components/button/block-title";
import { AppContext } from "../../context/app.context";

const ToxicModal = ({ onClose }) => {
  const { health, regular, occasional } = useContext(AppContext);
  const toxicFoods = [
    "Smoking",
    "Alcohol",
    "Cigarettes",
    "Tobacco",
    "Cocaine",
    "Heroin",
    "vape",
    "hookah",
  ];

  const [selectedFoods, setSelectedFoods] = useState([]);


  const toggleSelection = (food) => {

    setSelectedFoods((prevSelected) =>
      prevSelected.includes(food)
        ? prevSelected.filter((item) => item !== food)
        : [...prevSelected, food]
    );
  };


  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Toxic Substance Selection
          </h1>
          <p className="text-xl text-center">
            Do you consume any toxic substance ?
          </p>
        </div>
        <form className="p-2">
          <h1 className="text-black-800 text-2xl font-bold w-full p-3 rounded-b-lg text-start">
            If yes, Select the Toxic Substance:
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

          <div className="flex justify-end">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Save +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToxicModal;
