import usePut from "../../hooks/usePut";
import BlockTitle from "../button/block-title";
import { useState, useContext } from "react";

const HealthModal = ({ onClose }) => {
  const diseases = [
    "Diabetes", "Hypertension (High Blood Pressure)", "Heart Disease",
    "Stroke", "Asthma", "Tuberculosis", "Pneumonia", "Hepatitis B",
    "Liver Cirrhosis", "Arthritis", "Osteoporosis", "Epilepsy",
    "Lung Cancer", "Breast Cancer", "Leukemia"
  ];

  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const { update } = usePut('/garden/update', {
    'healthPrompt': selectedDiseases
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    await update();
    onClose();
  }
  const { update: saveOnly } = usePut('/garden/update', {
    'healthPrompt': ['Same']
  });

  const handleSaveasPerious = async (e) => {
    e.preventDefault()
    await saveOnly();
    onClose();
  }
  const toggleSelection = (disease) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((item) => item !== disease)
        : [...prevSelected, disease]
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white max-w-xl w-[90%] h-auto flex flex-col rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Any Health issues
          </h1>
        </div>
        <form className="p-2">
          <h1 className="text-black text-2xl font-bold w-full p-3 rounded-b-lg text-start">
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
          <div className="flex p-2 gap-2 justify-end">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
              Update
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={handleSaveasPerious}>
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

export default HealthModal;
