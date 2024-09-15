import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAcions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import HorizontalCards from "../components/partials/HorizontalCards";
import { Outlet } from "react-router-dom";

const Tvdetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);

  console.log("info is " + info);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2) , rgba(0 ,0,0,.5) , rgba(0 , 0 , 0 , .7)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[220vh] px-[8%] relative"
    >
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
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill "></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDB
        </a>
      </nav>

      {/* part2 */}

      <div className="w-full flex">
        <img
          className=" shadow-[8px_17px_38px_2px_rgba(0 , 0 ,0 ,.5)]  h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%]  text-white">
          <h1 className="text-5xl font-black text-white">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}

            <span className="text-2xl font-bold text-zinc-300 ">
              ({info.detail.first_air_date.split("-")[0]})
            </span>
          </h1>

          <div className="mt-3 mb-5 flex text-white items-center gap-x-5">
            <span className=" text-white w-[10vh]  h-[10vh] flex justify-center items-center bg-yellow-600 text-xl rounded-full font-semibold ">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold text-xl w-[50px] leading-4">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl mb-3 mt-4 ">Overview</h1>
          <p className="mb-[3%]">{info.detail.overview}</p>

          {/* <h1 className="text-2xl mb-3 mt-4 ">Movie Translated</h1> */}
          {/* <p>{info.translations.join(", ")}</p> */}
          <Link
            className="  p-3 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i class="ri-play-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>
      {/* part 3 platforms   */}

      <div className="w-[80%] flex flex-col gap-y-5 my-8">
        {/* flatrate */}

        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {/* rent */}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {/*  */}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="my-4 border-none h-[2px] bg-zinc-500" />
      {/* seasons */}

      <h1 className="text-2xl font-bold text-white ">Seasons</h1>

      <div className=" w-[100%]  flex  overflow-y-hidden mb-5 p-3 ">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div className="w-[20vh] mr-[9%]">
              <img
                className=" shadow-[8px_17px_38px_2px_rgba(0 , 0 ,0 ,.5)] min-w-[15vw]  h-[35vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
                alt=""
              />
              <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-white font-black text-center mt-5">
            Nothing to Show
          </h1>
        )}
      </div>

      {/* Reccomendations and similar */}
      <hr className="my-4 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-2xl font-bold text-white ">
        Recommendations & Similar
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Tvdetails;
