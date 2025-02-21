import React, { useContext, useState } from "react";
import BlockTitle from "../../components/button/block-title";
import Buttons from "../../components/button/button";
import { AppContext } from "../../context/app.context";
import { useNavigate } from "react-router-dom";

const RegularFood = () => {
  const individualFoods = [
    "Rice",
    "Lentils",
    "Vegetables",
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

  const { setRegular } = useContext(AppContext);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [isNormal, setIsNormal] = useState(false);

  const toggleSelection = (food) => {
    if (isNormal) {
      setIsNormal(false);
    }
    setSelectedFoods((prevSelected) =>
      prevSelected.includes(food)
        ? prevSelected.filter((item) => item !== food)
        : [...prevSelected, food]
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(selectedFoods);
    setRegular(selectedFoods);
    navigate('/osscian-food');
  };

  return (
    <div className="background flex justify-center text-black bg-slate-800 items-center h-full sm:h-screen">
      <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Regular Food Selection
          </h1>
          <p className="text-xl text-center">What do you eat in a regular diet?</p>
        </div>
        <form className="p-2">
          <h1 className="text-black-900 text-2xl font-bold w-full p-3 rounded-b-lg text-start">
            Select the foods you eat regularly:
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

          <div className="flex justify-end">
            <Buttons onAdd={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegularFood;
