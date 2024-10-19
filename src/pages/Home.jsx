import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import HomeContainer from "../components/HomeContainer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <HomeContainer/>
    </div>
  );
}
