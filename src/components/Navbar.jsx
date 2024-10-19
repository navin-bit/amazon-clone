import React from "react";
import shopnow from "../assets/images/J24_P3_SWM_ShopNow._CB545049405_.jpg";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    // Navbar
    <nav className="navbar w-full relative  ">
      <div className="overflow-x-auto p-1">
        <div className="flex space-x-3 whitespace-nowrap">
          <a href="#all" className="p-1 flex text-white hover:border">
            <IoMenu className="mt-1" />
            <span className="font-bold px-1 text-sm text-white">All</span>
          </a>
          <a href="#fress" className="p-1 text-sm text-white hover:border">
            Fress
          </a>
          <a href="#mx-player" className="p-1 text-sm text-white hover:border">
            MX Player
          </a>
          <a href="#sell" className="p-1 text-sm text-white hover:border">
            Sell
          </a>
          <a
            href="#best-sellers"
            className="p-1 text-sm text-white hover:border"
          >
            Best Sellers
          </a>
          <a
            href="#todays-deals"
            className="p-1 text-sm text-white hover:border"
          >
            Today's Deals
          </a>
          <a href="#mobiles" className="p-1 text-sm text-white hover:border">
            Mobiles
          </a>
          <a
            href="#electronics"
            className="p-1 text-sm text-white hover:border"
          >
            Electronics
          </a>
          <a
            href="#home-kitchen"
            className="p-1 text-sm text-white hover:border"
          >
            Home & Kitchen
          </a>
          <button
            className="p-1 flex text-sm text-white hover:border"
            aria-label="Prime Menu"
          >
            Prime
            <span className="h-full p-1 text-white">
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
          <a
            href="#customer-service"
            className="p-1 text-sm text-white hover:border"
          >
            Customer Service
          </a>
          <a
            href="#new-releases"
            className="p-1 text-sm text-white hover:border"
          >
            New Releases
          </a>
          <a href="#fashion" className="p-1 text-sm text-white hover:border">
            Fashion
          </a>
          <img
            src={shopnow}
            className="p-1 w-[500px] h-[30px] text-white hover:border"
          />
        </div>
      </div>
    </nav>
  );
}
