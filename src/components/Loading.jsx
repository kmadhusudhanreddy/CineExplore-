import React from "react";
import loader from "../components/images/loader.gif";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={loader} object-cover alt="" />
    </div>
  );
};

export default Loading;
