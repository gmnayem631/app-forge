import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      {/* Content */}
      <div className="flex justify-center items-center flex-col gap-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold md:font-extrabold">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#753EE8] to-violet-500 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-center w-3/4 text-[#627382]">
          At AppForge, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4">
          <button className="btn">
            <IoLogoGooglePlaystore size={24} />
            <a href="https://play.google.com/store/games" target="_blank">
              Google Play
            </a>
          </button>
          <button className="btn">
            <FaAppStoreIos size={24} />
            <a href="https://apps.apple.com/us/iphone/today" target="_blank">
              App Store
            </a>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 flex justify-center">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
