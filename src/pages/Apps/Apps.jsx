import React from "react";
import { useLoaderData } from "react-router";

import AppsCard from "./AppsCard";

const Apps = () => {
  const apps = useLoaderData();
  //   console.log(apps);
  return (
    <div className="max-w-11/12 mx-auto my-20">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-[#001931] font-bold text-4xl">
          Our All Applications
        </h2>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10">
        <p className="font-semibold text-xl">Apps Found ({apps.length})</p>
        <input
          type="text"
          name="search"
          className="border border-gray-400 px-4 py-2 rounded-lg w-full sm:w-auto"
          placeholder="Search Apps"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {apps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
