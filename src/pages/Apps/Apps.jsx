import React from "react";
import { useLoaderData } from "react-router";

const Apps = () => {
  const apps = useLoaderData();
  //   console.log(apps);
  return <div className="max-w-11/12 mx-auto">Apps</div>;
};

export default Apps;
