import React from "react";
import AccordionBasic from "../Components/Accordion";
import Navbar from "../Components/Navbar";
import "./dashboard.css";
import SideNav from "../Components/SideNav";

const Dashboard = () => {
  return (
    <div className="main_body_cont">
      <Navbar />
      <SideNav/>
    </div>
  );
};

export default Dashboard;
