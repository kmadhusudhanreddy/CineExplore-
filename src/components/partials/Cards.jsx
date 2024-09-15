import React from "react";
import { Link } from "react-router-dom";
import noimage from "./images/NoImage.jpg";
const Cards = ({ data, title }) => {
  console.log("from" + title);

  return (
    <div className=" flex flex-wrap w-full h-full px-[3%] bg-[#1F1F24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
          key={i}
        >
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0 , 0 ,0 ,.5)]  h-[40vh] object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.title || c.name || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-13%] bottom-[40%] text-white w-[10vh]  h-[10vh] flex justify-center items-center bg-yellow-600 text-xl rounded-full font-semibold ">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
