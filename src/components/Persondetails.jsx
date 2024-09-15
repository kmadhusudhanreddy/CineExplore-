import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

import { asyncloadperson, removeperson } from "../store/actions/personActions";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Persondetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [category, setCategory] = useState("movie");
  const { info } = useSelector((state) => state.person);

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="w-screen   h-fit px-[15%] bg-[#1F1E24] pb-[5%]  ">
      {/* part1 */}

      <nav
        className=" w-full text-zinc-100 flex gap-10
       h-[10vh] text-xl  items-center "
      >
        <Link>
          <i
            class="hover:text-[#6565Cd] ri-arrow-left-line "
            onClick={() => navigate(-1)}
          ></i>
        </Link>
      </nav>

      {/* part 2 */}
      <div className="w-full flex ">
        {/* part2  left poster and details */}

        <div className="w-[20%] ">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0 , 0 ,0 ,.5)]  h-[30vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="my-4 border-none h-[2px] bg-zinc-500" />
          {/* external links */}

          <div className="text-2xl text-white flex gap-x-5 ">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i class="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com//${info.externalid.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com//${info.externalid.instagram_id}`}
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* personal information */}

          <h1 className="text-2xl text-zinc-400 font-semibold my-3">
            Personal Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-2">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-2">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-2">DeathDay</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Place Of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        {/* part-3 right details and information */}

        <div className="w-[80%] ml-[5%]  ">
          <h1 className="text-4xl text-zinc-400 font-black my-3">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold ">Biography</h1>
          <p className=" text-zinc-400 mt-3">{info.detail.biography}</p>
          <h1 className="text-lg text-zinc-400 font-black mt-3">Known For</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          {/*  */}
          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-black mt-3">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-400    w-full mt-5 h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-3 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer p-3 rounded"
              >
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {" "}
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>

                  <span className="block ml-3 mt-2">
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Persondetails;
