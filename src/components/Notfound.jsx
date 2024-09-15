import React from "react";
import Notfoundloader from "../components/images/Notfoundloader.webp";
const Notfound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <img
        className="h-[50%] object-cover"
        src={Notfoundloader}
        object-cover
        alt=""
      />
    </div>
  );
};

export default Notfound;
