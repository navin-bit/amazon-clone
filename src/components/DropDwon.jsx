import React from "react";

export default function DropDwon() {
  return (
    <div>
      <div className="relative ">
        <div className="inline-flex items-center overflow-hidden p-1 pb-1 rounded-s-sm  bg-gray-200 border">
          <a
            href="#"
            className="border-e px-4 py-2 text-sm/none  bg-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
          >
            All
          </a>

          <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
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
          </button>
        </div>
      </div>
    </div>
  );
}
