import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

import Loading from "./Loading";
const Home = () => {
  document.title = "MovieApp | HomePage";

  let [wallpaper, setWallPaper] = useState(null);
  let [trending, setTrending] = useState(null);
  let [category, setCategory] = useState("all");

  let GetHeaderWallPaper = async () => {
    try {
      let { data } = await axios.get(`/trending/all/day`);

      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallPaper(randomData);
    } catch (error) {
      console.log(" Error : " + error);
    }
  };

  const GetTrending = async () => {
    try {
      let { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(" Error : " + error);
    }
  };

  useEffect(() => {
    // !trending &&
    GetTrending();
    !wallpaper && GetHeaderWallPaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav></Sidenav>

      <div className="w-[80%] h-full overflow-auto  overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />
        <div className=" flex justify-between p-3">
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading></Loading>
  );
};

export default Home;
