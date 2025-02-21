import React from "react";
import { FaLeaf, FaSmoking, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import HealthModal from "../../components/popup/Health";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
        <SidebarButton icon={<FaLeaf />} />
        <SidebarButton icon={<FaSmoking />} />
        <SidebarButton icon={<FaHeart />} onClick={toggleModal} />
        <SidebarButton icon={<FaSignOutAlt />} />
      </div>
      {isOpen && <HealthModal onClose={toggleModal} />}
    </>

  );
};

const SidebarButton = ({ icon, onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 shadow-md"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default Dashboard;
