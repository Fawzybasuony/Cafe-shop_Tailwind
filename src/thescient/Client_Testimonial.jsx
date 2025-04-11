import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Client_Testimonial() {
  return (
    <>
      <div className="text-center my-16">
        <h1 className="text-3xl md:text-5xl font-bold">Client Testimonial</h1>
        <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
          We've served thousands of happy customers, and their kind words fuel
          our passion every day. Discover what makes our coffee special through
          the voices of those who’ve tasted it.
        </p>

        <div className="flex justify-center  ">
          <div
            data-aos="fade-right"
            className="flex -space-x-2 overflow-hidden"
          >
            <img
              className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="."
            />
            <img
              className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="."
            />
            <img
              className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="."
            />
            <img
              className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="."
            />
          </div>
          <div className="border-r-4 border-indigo-950 px-5"></div>
          <div className="ms-2">
            <h2 className="text-3xl text-left font-bold">
              4.6
              <FontAwesomeIcon className="text-orange-300 ms-1" icon={faStar} />
            </h2>
            <p className="py-4   text-gray-500 text-xs">
              Rated by 25k on google.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
