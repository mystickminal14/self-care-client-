import React, { useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const GuideModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [color] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col rounded-lg shadow-lg p-3">
          <div className="flex justify-center flex-col items-center p-4">
            <h1 className="text-blue-800 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
              Guideline
            </h1>
          </div>

          <form className="p-2 max-h-96 overflow-y-auto"> {/* Set max height here */}
            <h1 className="text-xl font-semibold p-2">
              Each status is represented by two plants.
            </h1>

            <h1 className="text-xl font-semibold p-2">Food Consumption</h1>
            <div>
              <ol className="list-decimal pl-6 text-lg">
                <li>If the user eats both healthy and unhealthy food → One plant in the healthy area & one in the unhealthy area.</li>
                <li>If the user eats only healthy food → Two plants in the healthy area.</li>
                <li>If the user eats only unhealthy food → Two plants in the unhealthy area.</li>
              </ol>
            </div>

            <h1 className="text-xl font-semibold p-2">Health Condition:</h1>
            <div>
              <ol className="list-decimal pl-6 text-lg">
                <li>If the user has no major disease or only mild conditions → One plant in the healthy area & one in the unhealthy area.</li>
                <li>If the user is completely healthy → Two plants in the healthy area.</li>
                <li>If the user is unhealthy (with serious health conditions) → Two plants in the unhealthy area.</li>
              </ol>
            </div>

            <h1 className="text-xl font-semibold p-2">Toxic Consumption (e.g., smoking, tobacco, hookah, etc.):</h1>
            <div>
              <ol className="list-decimal pl-6 text-lg">
                <li>If the user consumes any toxic substances → Two plants in the unhealthy area.</li>
                <li>If the user does not eat anything → Two plants in the healthy area.</li>
              </ol>
            </div>

            <div className="flex gap-2 justify-end p-4">
              <button
                className="bg-red-800 cursor-pointer text-white px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Close
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
        data-testid="loader"
      />
    </>
  );
};

export default GuideModal;
