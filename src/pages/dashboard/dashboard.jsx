import React from "react";
import { FaLeaf, FaSmoking, FaHeart, FaSignOutAlt } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="fixed left-0 top-0 h-full flex flex-col gap-4 p-4 bg-transparent">
      <SidebarButton icon={<FaLeaf />} />
      <SidebarButton icon={<FaSmoking />} />
      <SidebarButton icon={<FaHeart />} />
      <SidebarButton icon={<FaSignOutAlt />} />
    </div>
  );
};

const SidebarButton = ({ icon }) => {
  return (
    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 shadow-md">
      {icon}
    </button>
  );
};
export default Dashboard;
