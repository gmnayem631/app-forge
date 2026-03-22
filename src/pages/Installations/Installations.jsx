import React from "react";
import { useInstall } from "../../context/useInstall";
import InstalledAppCard from "../../components/InstalledAppCard/InstalledAppCard";

const Installations = () => {
  const { installedApps } = useInstall();

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
        <input
          type="text"
          name="sort"
          placeholder="Sort by"
          className="px-4 py-2 rounded-lg border"
        />
      </div>
      {/* Installed Apps' cards */}

      <div className="">
        {installedApps.length === 0 ? (
          <p className="text-[#627382] col-span-4 text-4xl text-center mt-16">
            No apps installed yet.
          </p>
        ) : (
          installedApps.map((app) => (
            <InstalledAppCard key={app.id} app={app}></InstalledAppCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Installations;
