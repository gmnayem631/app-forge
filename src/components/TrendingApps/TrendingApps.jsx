import React from "react";

import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = ({ apps }) => {
  const topApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  return (
    <div className="max-w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-bold tracking-tight text-base-content text-center">
        Trending Apps
      </h2>
      <p className="mt-1 text-sm text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {topApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to={"/apps"}
          className="btn bg-linear-to-r from-[#753EE8] to-violet-500 text-white font-semibold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
