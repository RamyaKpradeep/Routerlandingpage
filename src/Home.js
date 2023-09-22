import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../src/images/pexels-vlada-karpovich-4050287.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to Udemy </h1>
       
        <p>Learn and discover all courses for free</p>
      </div>
    </div>
  );
}

export default Home;