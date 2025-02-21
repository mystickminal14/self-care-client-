import React, { useState } from "react";
import BlockTitle from "../../components/button/block-title";

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


  const [selectedFoods, setSelectedFoods] = useState([]);

  const toggleSelection = (food) => {
    setSelectedFoods((prevSelected) =>
      prevSelected.includes(food)
        ? prevSelected.filter((item) => item !== food)
        : [...prevSelected, food]
    );
  };

  return (
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
                onClick={() => toggleSelection(food)}
              />
            ))}
          </div>

          <div className="flex gap-2 justify-end pt-2">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={onClose}>
              update
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Save as Previous
            </button>
            <button className="bg-red-800 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodModal;
