import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import noAppError from "../../assets/App-Error.png";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          className="border border-gray-400 px-4 py-2 rounded-lg w-full sm:w-auto"
          placeholder="Search Apps by Title"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {filteredApps.length === 0 ? (
          <div className="col-span-4 my-20">
            <div className="flex justify-center items-center">
              <img src={noAppError} className="" alt="" />
            </div>
            <div className="text-center my-10 flex flex-col gap-4">
              <h2 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h2>
              <p className="text-[#627382]">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
              <div className="">
                <Link
                  to={"/apps"}
                  className="btn px-5 py-2.5 text-white font-medium bg-linear-to-r from-[#753EE8] to-violet-500"
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        ) : (
          filteredApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))
        )}
        {}
      </div>
    </div>
  );
};

export default Apps;
