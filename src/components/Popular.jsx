import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";

import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Popular = () => {
  let navigate = useNavigate();

  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  let [hasMore, setHasMore] = useState(true);

  document.title = "MovieApp || Popular " + category.toUpperCase();
  const GetPopular = async () => {
    try {
      let { data } = await axios.get(`/${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prevData) => [...prevData, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(" Error : " + error);
    }
  };

  const refreshHandler = async () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full  flex items-center  justify-between px-[3%] py-2">
        <h1 className=" text-2xl font-semibold text-zinc-400 ">
          <i
            class="hover:text-[#6565Cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default Popular;
