import React from "react";
import "./sidenav.css";
import LOGO from "../Assets/logo.svg";
import Upload from "../Assets/upload.svg";
import { PiScanLight } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { FaPercent } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";

const SideNav = () => {
  return (
    <div className="side_container">
      <div className="item_container">
        <div className="img_box">
          <img src={LOGO} alt="Mployee.me" />
        </div>
        <div className="top_options">
          <span id="scan_btn">RESUME SCAN</span>
          <span id="upload_btn">
            <img src={Upload} alt="" /> Scan my resume{" "}
            <IoIosArrowUp style={{ marginLeft: "33px" }} />
          </span>
          <span className="normal_btn">
            <PiScanLight id="minico" />
            Recent Scans
          </span>
          <span className="normal_btn">
            <PiScanLight id="minico" />
            Previous Scans
          </span>
          <span className="normal_btn">
            <FaPercent
              style={{ fontSize: 12, margin: "0 15px 0 9px" }}
              id="minico"
            />
            Get Credits
          </span>
        </div>
        <div className="bott_options">
          <span id="head_gray">Help & Support</span>
          <span className="normal_btn">
            <IoMdInformationCircleOutline id="minicon" />
            Contact Us
          </span>
          <span className="normal_btn">
            <BsQuestionSquare
              style={{ fontSize: 13, margin: "0 16px 0 7px" }}
            />
            About Us
          </span>
          <span className="normal_btn">
            <MdOutlineSettings id="minicon" />
            Terms of Service
          </span>
          <span className="normal_btn">
            <MdOutlinePrivacyTip id="minicon" />
            Privacy Policy
          </span>
          <span id="credit_btn">
            <span style={{ color: "#000000", margin: "0 10px 0 5px" }}>
              Credits Available:
            </span>{" "}
            8510
          </span>
          <span id="buy_btn">
            <MdOutlineCreditCard style={{fontSize: 20, color: '#FF9800', margin:"0 10px 0 5px" }}/>
            BUY MORE CREDITS
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
