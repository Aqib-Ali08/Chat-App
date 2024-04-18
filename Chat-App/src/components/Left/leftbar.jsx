import React, { useContext, useEffect, useState } from "react";
import viteLogo from "../../../public/vite.svg";
import reactLogo from "../../assets/react.svg";
import "./leftbar.css";
import NameCard from "./nameCard";
import {isTrue} from './nameCard'
// import { counterContext } from "../../context/context";

const leftbar = () => {
  const [isTrueState, setIsTrueState] = useState(isTrue);

  useEffect(() => {
    setIsTrueState(isTrue);
    console.log("isTrueState is", isTrueState)
  }, [isTrue]);
    
  return (
    <div className="leftbar" style={{ display: isTrue ? 'none' : 'flex' }}>
      <div className="left">
        <div className="logo">
        <h2>Chat-APP</h2>
        </div>

        <div className="search">
          <input placeholder="Search user or chat" id="search"></input>
        </div>

        <div className="alert">
          <span>
            New
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="alert-icon"
            >
              <circle cx="12" cy="12" r="6"></circle>
            </svg>
          </span>
          <span>9</span>
        </div>

        <section className="contacts">
          <NameCard />
        </section>
        
      </div>
      <div className="bg-text">
      <h1>Chat-APP</h1>
    </div>
      </div>
  );
};

export default leftbar;
