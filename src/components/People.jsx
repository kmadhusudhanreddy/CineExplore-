import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";

import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  let navigate = useNavigate();

  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  let [hasMore, setHasMore] = useState(true);

  document.title = "MovieApp || People";
  const GetPeople = async () => {
    try {
      let { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPeople((prevData) => [...prevData, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(" Error : " + error);
    }
  };

  const refreshHandler = async () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return people.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full  flex items-center  justify-between px-[3%] py-2">
        <h1 className=" text-2xl font-semibold text-zinc-400 ">
          <i
            class="hover:text-[#6565Cd] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          People
          {<small className="text-md ml-2 text-zinc-600">({category})</small>}
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          {/* <Dropdown
            title="Category"
            options={["on_the_air", "top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          /> */}
          {/* <div className="w-[2%]"></div> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title="person"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default People;