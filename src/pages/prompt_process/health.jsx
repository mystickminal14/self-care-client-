import React, { useContext, useState } from "react";
import BlockTitle from "../../components/button/block-title";
import Buttons from "../../components/button/button";
import { AppContext } from "../../context/app.context";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const diseases = [
    "Diabetes",
    "Hypertension (High Blood Pressure)",
    "Heart Disease",
    "Stroke",
    "Asthma",
    "Chronic Obstructive Pulmonary Disease (COPD)",
    "Tuberculosis",
    "Pneumonia",
    "Hepatitis B",
    "Chronic Kidney Disease (CKD)",
    "Liver Cirrhosis",
    "Arthritis",
    "Osteoporosis",
    "Alzheimer’s Disease",
    "Parkinson’s Disease",
    "Multiple Sclerosis",
    "Epilepsy",
    "Lung Cancer",
    "Breast Cancer",
    "Leukemia",
  ];

  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [isNormal, setIsNormal] = useState(false);
  const { setHealth } = useContext(AppContext);
  const toggleSelection = (disease) => {
    if (isNormal) {
      setIsNormal(false);
    }
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((item) => item !== disease)
        : [...prevSelected, disease]
    );
  };
const navigate=useNavigate();
  const handleNormalSelection = () => {
    setIsNormal(true);
    setSelectedDiseases(['normal']);
  };
  const handleSubmit = async () => {
    setHealth(selectedDiseases);
    navigate('/regular-food');
  };
  return (
    <div className="background flex justify-center text-black bg-slate-800 items-center h-full sm:h-screen">
      <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col gap-5 rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="text-blue-900 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Prompt Process
          </h1>
          <p className="text-xl text-center">Do you have any health issue?</p>
        </div>
        <form className="p-2">
          <div className="flex justify-center mb-4">
            <BlockTitle
              title="Yes, I am Normal"
              isSelected={isNormal}
              onClick={handleNormalSelection}
            />
          </div>
          <h1 className="text-black-900 text-2xl font-bold w-full p-3 rounded-b-lg text-start">
            If you have any disease, please select from the following options:
          </h1>
          <div className="flex flex-wrap gap-2">
            {diseases.map((disease, index) => (
              <BlockTitle
                key={index}
                title={disease}
                isSelected={selectedDiseases.includes(disease)}
                onClick={() => toggleSelection(disease)}
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

export default Tabs;
