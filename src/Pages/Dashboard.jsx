import React, { useState } from "react";
import AccordionBasic from "../Components/Accordion";
import Navbar from "../Components/Navbar";
import "./dashboard.css";
import SideNav from "../Components/SideNav";
import Menu from "../Assets/menu.svg";
import Present from "../Assets/present.svg";
import ID from "../Assets/id.svg";
import Info from "../Assets/info.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Share from '../Assets/share.svg'
import Up from '../Assets/up.svg'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Competencies");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="main_body_cont">
      <Navbar />
      <div className="main_screen">
        <SideNav />
        <div className="stats_section">
            <span style={{color: '#A2A3A7', marginLeft:'-455px' }}>Experience : Less than 2 years</span>
          <div className="result">
            <div className="feed">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  background
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#E33629",
                    textSize: "28px",
                    textColor: "#000000",
                    trailColor: "#d6d6d630",
                    backgroundColor: "#FFF2F1",
                  })}
                  counterClockwise
                  value={40}
                  text={`40%`}
                />
              </div>
              <span>Ohh No !! Needs improvement. Your resume just scored 14 out of 100. You need 21 points to reach orange zone atleast.</span>
            </div>
            <div className="vertical_btn2">
            <img src={Share} alt=" " />
            <img src={Up} alt=" " /> 
            </div>
          </div>
          <div className="stat_tabs">
            <div
              className={`features ${
                activeTab === "Competencies" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Competencies")}
            >
              <img src={Menu} alt=" " />
              Competencies
            </div>
            <div
              className={`features ${
                activeTab === "Information" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Information")}
            >
              <img src={Info} alt=" " />
              Information
            </div>
            <div
              className={`features ${
                activeTab === "Presentation" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Presentation")}
            >
              <img src={Present} alt=" " />
              Presentation
            </div>
            <div
              className={`features ${
                activeTab === "Personal Details" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Personal Details")}
            >
              <img src={ID} alt=" " />
              Personal Details
            </div>
          </div>
          <AccordionBasic />
        </div>
        <div className="add_pdf">
          <span>Please add a direct PDF here,</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
