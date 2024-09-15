import React from "react";
import { Link } from "react-router-dom";
const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2) , rgba(0 ,0,0,.5) , rgba(0 , 0 , 0 , .7)) , url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[6%]"
    >
      <h1 className=" w-[70%]text-3xl font-black text-white ">
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white mt-3">
        {data.overview.slice(0, 200)}...
        <Link
          to={`${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          {" "}
          more{" "}
        </Link>
      </p>
      <p className="text-white mb-3">
        <i class="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i class="text-yellow-500 ml-4 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#6556CD] p-2 rounded-sm text-white  mt-2"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
