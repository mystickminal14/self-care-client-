import React from "react";
import root from '../../assets/plants/1.png'
import stem from '../../assets/plants/2.png'
import three from '../../assets/plants/3.png'
import four from '../../assets/plants/4.png'
import five from '../../assets/plants/5.png'
import six from '../../assets/plants/6.png'

import "./dash.css";
const Dashboard = () => {
  return (
    <div className="flex imageOne justify-center gap-9 items-end p-9 h-screen">
      <div className="plant">
        <img src={root} alt="" />
      </div>
      <div className="plant">
      <img src={stem} alt="" />

      </div>
      <div className="plant">
      <img src={three} alt="" />
      </div>
      <div className="plant">
      <img src={four} alt="" />
      </div>
      <div className="plant">
      <img src={five} alt="" />
      </div>
      <div className="plant">
      <img src={six} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
