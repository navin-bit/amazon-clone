import React, { useEffect, useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImageStore } from "../store/Images";

export default function ImageSlider() {
  const [Images, setImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (ImageStore && ImageStore.length > 0) {
      setImage(ImageStore);
    }
  }, [ImageStore]);

  const nextImage = () => {
    setCurrentIndex(currentIndex === Images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? Images.length - 1 : currentIndex - 1);
  };

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    // Clear the interval
    return () => clearInterval(interval);
  }, [currentIndex, Images.length]);

  console.log("Images", Images);

  return (
    <div className="relative w-full h-screen overflow-hidden  z-0">
      {Images && Images.length > 0
        ? Images.map((image, index) => (
            <div
              key={index}
              className={`flex w-full  justify-center h-screen ${
                currentIndex === index ? "" : "hidden"
              }`}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full  object-cover"
              />
            </div>
          ))
        : "Image not found"}

      <button
        className="absolute top-0 hover:border left-0   text-[45px]  text-white   h-[30vh] w-[50px]  focus:outline-none"
        onClick={prevImage}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="absolute top-0 hover:border right-0   text-[45px]   text-white p-2 px-2 h-[30vh] w-[50px]  focus:outline-none"
        onClick={nextImage}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
