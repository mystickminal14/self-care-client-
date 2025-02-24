import React, { useContext, useState } from "react";
import BlockTitle from "../../components/button/block-title";
import { AppContext } from "../../context/app.context";
import ClockLoader from "react-spinners/ClockLoader";
import usePut from './../../hooks/usePut';

const ToxicModal = ({ onClose }) => {
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
  const { modelHealth, modelFood, setRefreshData, setToxicModel, toggleModal } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { update } = usePut("/garden/update", {
    foodPrompt: modelFood,
    healthPrompt: modelHealth,
    toxicPrompt: selectedFoods,
  });

  let [color, setColor] = useState("#000000");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await update();
    setLoading(false);
    setRefreshData(true)
    onClose();
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const toggleSelection = (food) => {
    setSelectedFoods((prevSelected) =>
      prevSelected.includes(food)
        ? prevSelected.filter((item) => item !== food)
        : [...prevSelected, food]
    );
  };

  return (
    <>
      {/* Modal Container */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col rounded-lg shadow-lg p-5 relative">
          <div className="flex justify-center flex-col items-center p-4">
            <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
              Toxic Substance Selection
            </h1>
            <p className="text-xl text-center">
              Do you consume any toxic substance today ?
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

            <div className="flex gap-2 justify-end p-2">
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>

              <button
                className="bg-red-800 cursor-pointer text-white px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Loader */}
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
            <ClockLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ToxicModal;
