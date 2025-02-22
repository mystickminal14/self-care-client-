import React, { useState, useContext } from "react";
import BlockTitle from "../../components/button/block-title";
import usePut from "../../hooks/usePut";
import ClockLoader from "react-spinners/ClockLoader";
import { AppContext } from "../../context/app.context";
const FoodModal = ({ onClose }) => {
  const individualFoods = [
    "Rice",
    "Lentils",
    "Apple",
    "Banana",
    "Orange",
    "Milk",
    "Cheese",
    "Almonds",
    "Chicken",
    "Fish",
    "Eggs",
    "Carrots",
    "Broccoli",
    "Tomato",
    "Cucumber",
    "Mango",
    "Strawberries",
    "Avocado",
    "Coconut Water",
    "Fresh Juice",
    "Pizza",
    "Burger",
    "French Fries",
    "Fried Chicken",
    "Hot Dog",
    "Ice Cream",
    "Chocolate",
    "Candy",
    "Chips",
    "Cup Noodles",
    "Doughnuts",
    "Pasta",
    "Soft Drinks",
    "Popcorn with Butter",
  ];

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const { update } = usePut('/garden/update', {
    'foodPrompt': selectedFoods
  });
  let [color, setColor] = useState("#ffffff");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await update();
      onClose();
    } finally {
      setLoading(false);
    }
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
      <div className=" fixed inset-0 flex justify-center items-center">
        <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col rounded-lg shadow-lg p-5">
          <div className="flex justify-center flex-col items-center p-4">
            <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
              Food Selection
            </h1>
            <p className="text-xl text-center">What do you eat today ?</p>
          </div>
          <form className="p-2">
            <h1 className="text-black-800 text-2xl font-bold w-full p-3 rounded-b-lg text-start">
              Select the foods you eat today:
            </h1>
            <div className="flex flex-wrap gap-2">
              {individualFoods.map((food, index) => (
                <BlockTitle
                  key={index}
                  title={food}
                  isSelected={selectedFoods.includes(food)}
                  onClick={() => toggleSelection(food)} />
              ))}
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>

              <button className="bg-red-800 cursor-pointer text-white px-4 py-2 rounded-md" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ClockLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
    </>
  );
};

export default FoodModal;
