import BlockTitle from "../button/block-title";
import { useState, useContext } from "react";

const HealthModal = ({ onClose }) => {
  const diseases = [
    "Diabetes",
    "Hypertension (High Blood Pressure)",
    "Heart Disease",
    "Stroke",
    "Asthma",
    "Tuberculosis",
    "Pneumonia",
    "Hepatitis B",
    "Liver Cirrhosis",
    "Arthritis",
    "Osteoporosis",
    "Epilepsy",
    "Lung Cancer",
    "Breast Cancer",
    "Leukemia",
  ];
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const toggleSelection = (disease) => {

    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((item) => item !== disease)
        : [...prevSelected, disease]
    );
  };

  return (
    <div className="bg-transparent flex justify-center text-black  items-center h-full sm:h-screen">
      <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col gap-5 rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Prompt Process
          </h1>
        </div>
        <form className="p-2">

          <h1 className="text-black-800 text-2xl font-bold w-full p-3 rounded-b-lg text-start">
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
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Save +
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default HealthModal;
