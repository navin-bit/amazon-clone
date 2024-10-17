import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header flex flex-wrap w-full border">
      <div className="flex sm:w-[100%]  justify-around lg:w-[20%] w-full h-[60px]  ">
        <div className="amazon-icon flex sm:w-[50%] p-2 m-1 ms-2 hover:border">
          <a className="text-decoration-none" href="#">
            <img
              src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
              width="100"
              alt="Amazon Logo"
            />
          </a>
          <span className="text-white">.in</span>
        </div>
        <div className="location sm:w-[50%] hover:border px-1 m-1">
          <span className="text-[10px] text-white">
            Delivering to Mumbai 400017
          </span>
          <br />
          <i className="fa-solid fs-6 p-1 text-white fa-location-dot"></i>
          <span className="text-[13px] text-white font-bold">
            Update Location
          </span>
        </div>
      </div>
      <div className="flex-auto sm:w-[100%] m-1  lg:w-[35%] w-full h-[60px]   text-white">
        <SearchBar />
      </div>
      <div className="flex-auto flex sm:w-[100%]   lg:w-[5%] w-full h-[60px]  text-white">
        <div className="dropdown  p-4 mt-1 hover:border w-20">
          <button className="btn flex  text-white  ">
            <img
              className="mt-1.5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png"
              width="20"
              alt=""
            />
            <span>EN</span>
            <span className="h-full p-1 text-white   hover:text-gray-700">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="account">
          <button className="p-1 hover:border m-1">
            <span className="text-white text-[12px] font-light">
              Hello,sign in
            </span>
            <br />
            <span className="text-white text-[13px]  font-bold">
              Account & Lists
            </span>
          </button>
        </div>
        <div className="orders">
          <button className="p-1 hover:border m-1">
            <span className="text-white text-[12px] font-light">Returns</span>
            <br />
            <span className="text-white text-[13px]  font-bold">& Orders</span>
          </button>
        </div>

        <div className="cart m-1 p-3 hover:border ">
          <span>
            <i className="fa-solid text-[30px] fa-cart-shopping"></i>
            <span className="p-1 text-yellow-400">
                0
            </span>
          </span>

          <span className="text-white text-[13px]  font-bold">Cart</span>
        </div>
      </div>
    </div>
  );
}
