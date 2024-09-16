import React from "react";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6 ">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>MovieApp.</span>
      </h1>
      {/* trending */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-5 mb-3 ">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-fire-fill mr-1"></i> Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-magic-fill mr-1"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-movie-2-fill mr-1"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-tv-2-fill mr-1"></i> Tv Shows
        </Link>
        <Link
          to="/person"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-team-fill mr-1"></i> People
        </Link>
      </nav>
      {/* about us */}
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-[15px] mt-3 mb-2 ">
          Website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1"
        >
          <i className="ri-information-fill mr-1"></i> About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1"
        >
          <i className="ri-phone-fill mr-1"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
