import React from "react";
import img2 from "../assets/home-container/PC_CC_758x608_CEPC_50._SY304_CB545069641_.jpg";
import img1 from "../assets/home-container/J24_GW_PC_CC_SAD_1x._SY304_CB545060597_.jpg";
import img3 from "../assets/home-container/PC_QC-2_1x._SY116_CB545072051_.jpg";
import img4 from "../assets/home-container/PC_QC-1_1x._SY116_CB545072051_.jpg";
import img5 from "../assets/home-container/PC_QC-3_1x._SY116_CB545072051_.jpg";
import img6 from "../assets/home-container/PC_QC-4_1x._SY116_CB545072051_.jpg";
import gif from "../assets/home-container/c1921765-0119-4c96-94ef-c38446fed8b0.gif"

export default function HomeContainer() {
  return (
    <div className="relative top-[-470px]   w-full   z-10">
      <div className="home-boxes whitespace-nowrap overflow-x-scroll  w-full flex">
        <div className="home-box  px-5 py-2 m-4 bg-white w-[330px] h-[400px]">
          <h1 className="font-bold text-[20px] m-2">
            New deals added everyday
          </h1>
          <img src={img1} className="w-[300px] h-[300px]  mb-2" alt="" />
          <a href="" className="text-blue-500 text-sm hover:text-red-500">
            Explore now
          </a>
        </div>

        <div className="home-box border px-5 py-2 m-4 bg-white w-[350px] h-[400px]">
          <h1 className="font-bold text-[20px] m-2 whitespace-nowrap">
            Minimum 50% off | Home,<br /> kitchen & more
          </h1>
          <div className="box2 flex flex-wrap justify-around">
            <div>
              <img src={img3} className="w-[120px] h-[100px] m-1" alt="" />
              <span className="text-[12px]   "> Kitchen appliance </span>
            </div>
            <div>
              <img src={img4} className="w-[120px] h-[100px] m-1" alt="" />

              <span className="text-[12px]  "> Home decor </span>
            </div>
            <div>
              <img src={img5} className="w-[120px] h-[100px] m-1" alt="" />
              <span className="text-[12px]  ">Furniture</span>
            </div>
            <div>
              <img src={img6} className="w-[120px] h-[100px] m-1" alt="" />
              <span className="text-[12px]  "> Home improvement </span>
            </div>
          </div>
          <div className="ms-2 mt-2">
            <a href="" className="text-blue-500 text-sm  hover:text-red-500">
              See all deals
            </a>
          </div>
        </div>
        <div className="home-box border px-5 py-2 m-4 bg-white w-[350px] h-[400px]">
          <h1 className="font-bold text-[20px] m-2">
            Up to 80% off | Electronics <br /> & accessories
          </h1>
          <img src={img2} className="object-contain mb-2" alt="" />
          <div className="mt-4">
            <a href="" className="text-blue-500 text-sm  hover:text-red-500">
              See all deals
            </a>
          </div>
        </div>
        <div className="home-box   m-4   w-[350px] h-[400px]">
          <div className="w-[350px] h-[150px] p-4 bg-white">
            <h1 className="font-bold text-[20px] ">
              Up to 80% off | Electronics <br />& accessories
            </h1>

            <button className=" bg-yellow-300 w-[320px] py-2 rounded-[25px] text-sm mt-2">Sign in securely</button>
          </div>
          <div >
            <img src={gif} className="m-4 object-contain" alt="" />
             
          </div>
        </div>
      </div>
    </div>
  );
}
