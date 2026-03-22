import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const formatDownloads = (num) => {
  if (num >= 1000000) return `${num / 1_000_000}M`;
  if (num >= 1000) return `${num / 1_000}K`;
  return String(num);
};

const AppCard = ({ app }) => {
  const { image, title, description, downloads, ratingAvg } = app;
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden border border-base-200 hover:shadow-xl transition-shadow duration-300">
        <figure className="w-full h-44 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </figure>

        <div className="card-body p-4 gap-3">
          <p className="text-sm font-semibold text-base-content/80 leading-snug">
            {description}
          </p>

          <div className="flex flex-wrap justify-between gap-2 mt-1">
            {/* Downloads Badge */}
            <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-green-100 text-green-700 border-0">
              <img src={downloadIcon} className="w-3.5" alt="" />
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
    </Link>
  );
};

export default AppCard;
