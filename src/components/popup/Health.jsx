import ClockLoader from "react-spinners/ClockLoader";
import { AppContext } from "../../context/app.context";
import usePut from "../../hooks/usePut";
import BlockTitle from "../button/block-title";
import { useState, useContext } from "react";

const HealthModal = ({ onClose }) => {
  const diseases = [
    "Diabetes", "Hypertension (High Blood Pressure)", "Heart Disease",
    "Stroke", "Asthma", "Tuberculosis", "Pneumonia", "Hepatitis B",
    "Liver Cirrhosis", "Arthritis", "Osteoporosis", "Epilepsy",
    "Lung Cancer", "Breast Cancer", "Leukemia", "degrading"
  ];
  const { setModelHealth, toggleModal } = useContext(AppContext);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setModelHealth(selectedDiseases)
    onClose()
    toggleModal('toxic')
  };

  const { isLoading } = useContext(AppContext);
  let [color, setColor] = useState("#ffffff");

  const handleSaveasPerious = async (e) => {
    e.preventDefault();
    setModelHealth(['same']
    )
    onClose()
    toggleModal('toxic')
  }
  const handleImproving = async (e) => {
    e.preventDefault();
    setModelHealth(['improving']
    )
    onClose()
    toggleModal('toxic')
  }

  const toggleSelection = (disease) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((item) => item !== disease)
        : [...prevSelected, disease]
    );
  };

  return (
    <><div className="fixed inset-0 flex justify-center items-center z-50">
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
                onClick={() => toggleSelection(disease)} />
            ))}
          </div>
          <div className="flex p-2 gap-2 justify-end">
            <button
              className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>

            <button className="bg-blue-800 cursor-pointer text-white px-4 py-2 rounded-md" onClick={handleSaveasPerious}>
              Save as Previous
            </button>
            <button className="bg-green-800 cursor-pointer text-white px-4 py-2 rounded-md" onClick={handleImproving}>
              Improving
            </button>
            <button className="bg-red-800 cursor-pointer text-white px-4 py-2 rounded-md" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>

    </div><ClockLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
    </>

  );
};

export default HealthModal;
