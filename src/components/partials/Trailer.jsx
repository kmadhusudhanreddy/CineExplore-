import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Notfound from "../Notfound";
const Trailer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div
      className="absolute z-10 top-[0] left-[0] w-screen h-screen 
  flex items-center justify-center bg-[rgba(0,0,0,.9)] "
    >
      <Link>
        <i
          class="absolute hover:text-[#6565Cd] text-white
          text-3xl right-[5%] top-[5%]
           ri-close-fill "
          onClick={() => navigate(-1)}
        ></i>
      </Link>
      {ytvideo ? (
        <ReactPlayer
          controls
          height={400}
          width={900}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;
