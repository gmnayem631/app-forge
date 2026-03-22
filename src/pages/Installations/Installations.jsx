import React, { useState } from "react";
import { useInstall } from "../../context/useInstall";
import InstalledAppCard from "../../components/InstalledAppCard/InstalledAppCard";

const Installations = () => {
  const { installedApps } = useInstall();
  const [sort, setSort] = useState("");

  const handleSort = (type) => setSort(type);

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sort === "high to low") return b.downloads - a.downloads;
    if (sort === "low to high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="max-w-11/12 mx-auto my-20">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-3xl">Your Installed Apps</h2>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>

      <div className="flex justify-between mt-10">
        <p className="font-bold text-lg">
          {installedApps.length} {installedApps.length > 1 ? "Apps" : "App"}{" "}
          Found
        </p>

        {/*Dropdown for sort functionality */}
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}
        >
          Sort by Download Numbers
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li>
            <a onClick={() => handleSort("high to low")}>High to Low</a>
          </li>
          <li>
            <a onClick={() => handleSort("low to high")}>Low to High</a>
          </li>
        </ul>
      </div>
      {/* Installed Apps' cards */}

      <div className="mt-10">
        {sortedApps.length === 0 ? (
          <p className="text-[#627382] col-span-4 text-4xl text-center mt-16">
            No apps installed yet.
          </p>
        ) : (
          sortedApps.map((app) => (
            <InstalledAppCard key={app.id} app={app}></InstalledAppCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Installations;
