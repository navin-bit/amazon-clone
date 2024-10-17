import React from "react";
import DropDwon from "./DropDwon";

export default function SearchBar() {
  return (
    <div>
      <div className="relative flex mt-2  ">
        <DropDwon />
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search Amazon.in "
          className="w-full rounded-e-sm px-1 border-gray-200 py-2 pe-10 shadow-sm sm:text-sm"
        />

        <span className="absolute  rounded-e-sm overflow-hidden bg-yellow-300 inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="  text-black   ">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
