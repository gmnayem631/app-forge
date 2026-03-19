import React from "react";
import starIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";

const formatDownloads = (num) => {
  if (num >= 1000000) return `${num / 1_000_000}M`;
  if (num >= 1000) return `${num / 1_000}K`;
  return String(num);
};

const AppsCard = ({ app }) => {
  const { image, title, description, downloads, ratingAvg } = app;
  return (
    <div className="flex flex-col gap-2 p-2 mt-4 bg-white rounded-lg cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 ease-in-out">
      <div className="w-full h-48 overflow-hidden p-2 rounded-lg">
        <img
          src={image}
          className="rounded-lg w-full h-48 object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col my-4">
        <p className="">
          {title}: {description}
        </p>
        <div className="flex flex-1 flex-wrap justify-between gap-2 mt-4">
          {/* Downloads Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-green-100 text-green-700 border-0">
            <img src={downloadIcon} className="w-3.5" alt="" />{" "}
            {formatDownloads(downloads)}
          </span>

          {/* Rating Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-orange-100 text-orange-600 border-0">
            <img src={starIcon} className="w-3.5" alt="" />
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
