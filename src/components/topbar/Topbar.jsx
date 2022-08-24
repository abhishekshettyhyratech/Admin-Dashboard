import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.pinimg.com/736x/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
