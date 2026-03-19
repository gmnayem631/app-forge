import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdStar } from "react-icons/md";

const formatDownloads = (num) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return String(num);
};

const getBestRating = (ratings) => {
  const best = ratings.reduce((prev, curr) =>
    curr.count > prev.count ? curr : prev
  );
  return best.name;
};

const AppCard = ({ app }) => {
  const bestRating = getBestRating(app.ratings);

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden border border-base-200 hover:shadow-xl transition-shadow duration-300">
      <figure className="w-full h-44 overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4 gap-3">
        <div>
          <h3 className="font-bold text-base leading-tight">{app.title}</h3>
          <p className="text-xs text-base-content/50 mt-0.5">{app.companyName}</p>
        </div>

        <p className="text-sm font-semibold text-base-content/80 leading-snug">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {/* Downloads Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-green-100 text-green-700 border-0">
            <FiDownload size={12} />
            {formatDownloads(app.downloads)}
          </span>

          {/* Best Rating Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-orange-100 text-orange-600 border-0">
            <MdStar size={13} />
            {bestRating}
          </span>
        </div>
      </div>
    </div>
  );
};

const TrendingApps = ({ apps }) => {
  console.log(apps);

  const topApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  return (
    <div className="max-w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-bold tracking-tight text-base-content">
        Trending Apps
      </h2>
      <p className="mt-1 text-sm" style={{ color: "#627382" }}>
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {topApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
