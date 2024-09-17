import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "./images/NoImage.jpg";
const HorizontalCards = ({ data }) => {
  return (
    // <div className="w-full  p-5 ">
    <div className="w-[100%]  flex  overflow-y-hidden mb-5 p-3">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[23%] mr-4 mb-5 bg-zinc-900 h-[40vh] "
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                d.backdrop_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.profile_path
                    }`
                  : noimage
              }
              alt=""
            />

            <div className="text-white p-2 h-[45%] overflow-y-auto ">
              <h1 className=" text-[20px]  font-semibold  ">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>
              <p className="">
                {d.overview
                  ? d.overview.slice(0, 50)
                  : "No description available"}
                ...
                <span className="text-zinc-500"> more </span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl text-white font-black text-center mt-5">
          Nothing to Show
        </h1>
      )}
    </div>
    // </div>
  );
};

export default HorizontalCards;
