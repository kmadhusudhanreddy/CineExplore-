import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1F1E24] text-white flex justify-center items-center">
      <div className="max-w-3xl px-8">
        {/* Back Icon with Spacing */}
        <i
          className="hover:text-[#6565CD] ri-arrow-left-line text-2xl cursor-pointer mb-10"
          onClick={() => navigate(-1)}
        ></i>

        {/* Title Section with Icon */}
        <div className="mb-6 flex items-center space-x-3 ">
          <i className="ri-movie-2-fill text-[#FFBF00] text-4xl"></i>{" "}
          {/* Movie Icon */}
          <h1 className="text-4xl font-bold text-[#FFBF00]">
            About CineExplore
          </h1>
        </div>

        {/* Content with color highlights and icons */}
        <p className="text-lg flex items-center mb-4 ">
          <i className="ri-movie-line text-[#FF6347] mr-2"></i> CineExplore is
          your ultimate hub for discovering trending movies, popular TV shows,
          and details about people in the entertainment industry. Whether you're
          searching for the latest blockbusters or hidden gems, CineExplore
          provides an immersive experience with personalized recommendations,
          infinite scrolling, and easy navigation.
        </p>

        <p className="text-lg flex items-center mt-4">
          <i className="ri-star-line text-[#20B2AA] mr-2"></i> Explore detailed
          information, trailers, and biographies to get the complete picture of
          your favorite movies and shows. CineExplore is built with cutting-edge
          technologies to ensure a smooth and engaging experience for all users.
        </p>
      </div>
    </div>
  );
};

export default About;
